# Event Booking Application Lifecycles

## Overview
This document outlines the complete lifecycles for all major features in the multi-tenant event booking application, covering both client-side and server-side flows.

## Table of Contents
1. [Event Creation Lifecycle](#event-creation-lifecycle)
2. [Event Booking Lifecycle](#event-booking-lifecycle)
3. [Event Organizer Verification Lifecycle](#event-organizer-verification-lifecycle)
4. [Ticket Payments and Acquisition Lifecycle](#ticket-payments-and-acquisition-lifecycle)
5. [Friends Connection and Interaction Lifecycle](#friends-connection-and-interaction-lifecycle)
6. [EYFA (Events Your Friends Also Attend) Lifecycle](#eyfa-lifecycle)
7. [Tenant Management Lifecycle](#tenant-management-lifecycle)

---

## Event Creation Lifecycle

### Client-Side Flow
```
1. User Authentication & Access Check
   ├── Verify user is logged in
   ├── Check organizer_status (none/pending/approved/rejected)
   ├── organizerStatus === "approved" ? Allow Access : Block
   └── Redirect to organizer application if not approved

2. Tenant Context Verification
   ├── Ensure user has active tenant context
   ├── Verify user has permission to create events in tenant
   ├── Display current tenant (Personal/Organization)
   └── Allow tenant switching if multiple available

3. Event Creation Form
   ├── Basic Information
   │   ├── Event title (required, max 100 chars)
   │   ├── Description (optional)
   │   └── Category selection (required)
   ├── Schedule & Location
   │   ├── Date picker (required)
   │   ├── Time picker (required)
   │   └── Location input with geocoding
   ├── Ticketing Configuration
   │   ├── Standard ticket price
   │   ├── VIP ticket price
   │   ├── Total tickets available
   │   └── VIP tickets count
   ├── Media & Branding
   │   ├── Event image upload (required)
   │   └── Additional media (optional)
   └── Settings
       ├── Event visibility (draft/published)
       └── Trending flag (admin only)

4. Form Validation & Submission
   ├── Client-side validation using CreateEventSchema
   ├── Image processing and upload
   ├── Submit via createEventAction
   └── Handle success/error responses

5. Post-Creation Actions
   ├── Redirect to event management dashboard
   ├── Show success notification with event link
   ├── Update events cache
   └── Optionally share event with friends
```

### Server-Side Flow
```
1. Request Authentication
   ├── Verify token validity
   ├── Extract user context (userId, tenantId)
   ├── Check user exists and is active
   └── Validate tenant membership

2. Authorization Checks
   ├── organizerActionClient validation
   ├── Verify organizer_status === "approved"
   ├── Check tenant permissions
   └── Validate event creation quota (if applicable)

3. Input Processing
   ├── Validate schema (CreateEventSchema)
   ├── Sanitize user inputs
   ├── Process image uploads to cloud storage
   ├── Generate unique event identifiers
   └── Set default values (tickets_sold: 0, status: 'draft')

4. Database Operations
   ├── Insert event record with tenant_id
   ├── Set organizer_id from authenticated user
   ├── Create initial ticket inventory tracking
   ├── Log event creation activity
   └── Update organizer statistics

5. Post-Processing
   ├── Invalidate events cache
   ├── Send notifications to tenant members (if configured)
   ├── Index event for search
   └── Return event data with success status
```

### Database Schema
```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES tenants(id),
  organizer_id UUID NOT NULL REFERENCES users(id),
  title VARCHAR(100) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL,
  date VARCHAR NOT NULL,
  time VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  organizer_name VARCHAR NOT NULL,
  image_url TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  vip_price DECIMAL(10,2) NOT NULL,
  tickets_remaining INTEGER DEFAULT 0,
  vip_tickets INTEGER DEFAULT 0,
  tickets_sold INTEGER DEFAULT 0,
  is_trending BOOLEAN DEFAULT FALSE,
  status event_status DEFAULT 'draft',
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  venue_details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Event Booking Lifecycle

### Client-Side Flow
```
1. Event Discovery & Selection
   ├── Browse events (homepage, filters, search)
   ├── View detailed event information
   ├── Check friend attendance status
   └── Verify ticket availability and pricing

2. Ticket Selection
   ├── Choose ticket type (standard/VIP)
   ├── Select quantity (with availability constraints)
   ├── View real-time price calculation
   ├── Apply discount codes (if applicable)
   └── Review order summary

3. User Authentication Gate
   ├── Check if user is authenticated
   ├── Prompt login/registration if needed
   ├── Verify complete user profile
   └── Ensure active tenant context

4. Payment Flow
   ├── Select payment method (Stripe/M-Pesa)
   ├── Enter payment details
   ├── Process payment via buyTicketAction
   ├── Handle payment confirmation/failure
   └── Display booking confirmation

5. Post-Booking Experience
   ├── Generate and display QR code ticket
   ├── Send confirmation email
   ├── Add to user's ticket collection
   ├── Update event in saved events
   ├── Notify friends of attendance (optional)
   └── Navigate to ticket management
```

### Server-Side Flow
```
1. Booking Request Processing
   ├── Authenticate user and validate session
   ├── Check ticket availability in real-time
   ├── Apply temporary inventory lock
   ├── Validate payment method and details
   └── Calculate total cost including fees

2. Payment Processing
   ├── Create payment intent with Stripe/M-Pesa
   ├── Process payment through gateway
   ├── Handle payment webhook confirmations
   ├── Update payment status in database
   └── Manage payment failure scenarios

3. Ticket Generation
   ├── Create ticket record with unique identifier
   ├── Generate ticket number (format: EVT-YYYY-XXXXX)
   ├── Create QR code with encrypted ticket data
   ├── Set initial ticket status to 'pending'
   └── Link ticket to user and event

4. Inventory Management
   ├── Decrement available tickets atomically
   ├── Update event statistics (tickets_sold)
   ├── Release temporary inventory locks
   ├── Handle overselling prevention
   └── Update cache with new availability

5. Notification & Finalization
   ├── Send booking confirmation email
   ├── Update user's event attendance status
   ├── Log transaction for audit trail
   ├── Trigger friend notifications (if enabled)
   └── Return ticket data to client
```

---

## Event Organizer Verification Lifecycle

### Client-Side Flow
```
1. Application Trigger
   ├── User navigates to organizer application
   ├── Check current organizer_status
   ├── Display appropriate UI based on status:
   │   ├── 'none': Show application form
   │   ├── 'pending': Show pending status
   │   ├── 'approved': Show organizer dashboard
   │   └── 'rejected': Show reapplication option
   └── Provide clear status messaging

2. Application Form
   ├── Reason for becoming organizer (minimum 50 characters)
   ├── Previous event organization experience (optional)
   ├── Portfolio or website URL (optional)
   ├── Accept terms and conditions
   └── Form validation and submission

3. Application Submission
   ├── Submit via applyAsOrganizerAction
   ├── Update local user status to "pending"
   ├── Show submission confirmation
   ├── Disable form to prevent duplicate applications
   └── Provide expected review timeline

4. Status Monitoring
   ├── Check status on app initialization
   ├── Display status badges in navigation
   ├── Show conditional UI elements
   ├── Enable/disable organizer features
   └── Handle status change notifications
```

### Server-Side Flow
```
1. Application Processing
   ├── Authenticate user and validate session
   ├── Check for existing applications
   ├── Validate application data against schema
   ├── Prevent duplicate applications
   └── Ensure user meets basic requirements

2. Application Storage
   ├── Create organizer_applications record
   ├── Update user.organizer_status to "pending"
   ├── Set organizer_application_date
   ├── Generate unique application ID
   └── Store application metadata

3. Admin Notification System
   ├── Queue notification for admin review
   ├── Send application summary email
   ├── Create admin dashboard task
   ├── Set review priority and SLA
   └── Log application submission event

4. Review Process Management
   ├── Admin reviews application details
   ├── Decision: approve/reject with reason
   ├── Update user.organizer_status accordingly
   ├── Set reviewed_by and reviewed_at fields
   ├── Send status notification to applicant
   └── Enable/disable organizer features globally
```

---

## Ticket Payments and Acquisition Lifecycle

### Client-Side Flow
```
1. Payment Method Selection
   ├── Display available payment options
   ├── Show payment method icons and descriptions
   ├── Handle regional payment preferences
   ├── Validate payment method availability
   └── Store user payment preferences

2. Stripe Payment Flow
   ├── Create Stripe checkout session
   ├── Redirect to Stripe hosted checkout
   ├── Handle checkout completion/cancellation
   ├── Process payment confirmation webhook
   ├── Return to success page with ticket details
   └── Handle payment failure scenarios

3. M-Pesa Payment Flow
   ├── Initiate M-Pesa STK push request
   ├── Display payment prompt to user
   ├── Show payment instructions and amount
   ├── Poll for payment status updates
   ├── Confirm payment completion
   └── Handle payment timeout/failure

4. Payment Confirmation
   ├── Display payment success confirmation
   ├── Show ticket details and QR code
   ├── Provide download/email options
   ├── Update user's ticket collection
   ├── Show next steps (event details, calendar)
   └── Offer social sharing options
```

### Server-Side Flow
```
1. Payment Session Creation
   ├── Validate ticket availability and pricing
   ├── Calculate total amount including fees
   ├── Create payment session with provider
   ├── Store payment intent details
   ├── Set payment expiration time
   └── Return payment URL/instructions

2. Payment Processing
   ├── Handle payment provider webhooks
   ├── Verify webhook authenticity
   ├── Validate payment amount and details
   ├── Update payment status in database
   ├── Handle duplicate webhook prevention
   └── Process successful/failed payments

3. Ticket Fulfillment
   ├── Generate ticket records upon payment success
   ├── Create unique QR codes with encryption
   ├── Update event inventory atomically
   ├── Send confirmation emails with tickets
   ├── Log ticket generation for audit
   └── Update user's ticket collection

4. Payment Failure Handling
   ├── Process payment failure notifications
   ├── Release held ticket inventory
   ├── Update payment status to failed
   ├── Send failure notification to user
   ├── Provide retry payment options
   └── Log failure reasons for analysis
```

---

## Friends Connection and Interaction Lifecycle

### Client-Side Flow
```
1. Friend Discovery
   ├── Search users by email or full name
   ├── Import contacts from address book (optional)
   ├── Show suggested connections (mutual friends)
   ├── Display users attending same events
   ├── Filter search results by location/interests
   └── Show friend recommendation algorithms

2. Connection Management
   ├── Send friend requests with optional message
   ├── Receive and manage incoming requests
   ├── Accept/decline friend requests
   ├── View pending outgoing requests
   ├── Manage existing friendships
   └── Handle blocked users

3. Social Event Features
   ├── View friends' event attendance
   ├── See which friends are going to events
   ├── Invite friends to specific events
   ├── Create group event attendance
   ├── Share events with friends
   └── Comment on friends' event activity

4. Privacy & Settings
   ├── Control friendship visibility
   ├── Manage event sharing preferences
   ├── Set notification preferences
   ├── Block/unblock users
   ├── Control profile visibility to friends
   └── Manage data sharing settings
```

### Server-Side Flow
```
1. Friend Request Processing
   ├── Validate user existence and status
   ├── Check for existing friendship/request
   ├── Prevent self-friendship requests
   ├── Create friendship record with 'pending' status
   ├── Send notification to addressee
   └── Log friendship activity

2. Connection Establishment
   ├── Process friend request acceptance
   ├── Create bidirectional friendship records
   ├── Update user friend counts
   ├── Send confirmation notifications
   ├── Update privacy visibility settings
   └── Log successful connection

3. Social Data Aggregation
   ├── Generate friend activity feeds
   ├── Calculate mutual friend connections
   ├── Recommend events based on friend activity
   ├── Create social proof data for events
   ├── Track friend interaction patterns
   └── Generate social insights

4. Privacy Enforcement
   ├── Apply friend-based visibility rules
   ├── Filter event data based on friendships
   ├── Handle blocked user interactions
   ├── Manage data sharing permissions
   ├── Enforce notification preferences
   └── Audit privacy compliance
```

---

## EYFA (Events Your Friends Also Attend) Lifecycle

### Client-Side Flow
```
1. Social Event Discovery
   ├── Display events where friends are attending
   ├── Show friend attendance counts on event cards
   ├── Highlight mutual friend connections
   ├── Filter events by friend activity
   ├── Sort events by social relevance
   └── Show friend recommendation scores

2. Friend Activity Tracking
   ├── Monitor friends' event interactions
   ├── Track friends' RSVP status changes
   ├── Show real-time friend activity feed
   ├── Display friends' event reviews/ratings
   ├── Highlight trending events among friends
   └── Show social proof indicators

3. Social Engagement Features
   ├── Join friends at events with one click
   ├── Create group bookings with friends
   ├── Send "join me" invitations
   ├── Comment on friends' event plans
   ├── Share event excitement with friends
   └── Plan group attendance coordination

4. Personalized Recommendations
   ├── Show events based on friends' preferences
   ├── Recommend events where you know attendees
   ├── Suggest events similar to friends' choices
   ├── Display social similarity scores
   ├── Show trending events in your social circle
   └── Provide FOMO (fear of missing out) alerts

5. Social Analytics Dashboard
   ├── Display your social event statistics
   ├── Show friendship activity patterns
   ├── Track events attended with friends
   ├── Display social influence metrics
   ├── Show event discovery attribution
   └── Provide social engagement insights
```

### Server-Side Flow
```
1. Friend Activity Aggregation
   ├── Collect friends' event interactions
   ├── Track event attendance status changes
   ├── Monitor friend event bookings
   ├── Aggregate friend preference data
   ├── Calculate social influence scores
   └── Update real-time activity feeds

2. Social Recommendation Engine
   ├── Analyze friend event patterns
   ├── Calculate social affinity scores
   ├── Generate personalized event suggestions
   ├── Rank events by social relevance
   ├── Filter events by friend activity
   └── Apply machine learning for recommendations

3. Real-Time Social Updates
   ├── Process friend event status changes
   ├── Send push notifications for friend activity
   ├── Update social proof counters
   ├── Broadcast social events to friend networks
   ├── Manage notification frequency limits
   └── Handle privacy-filtered updates

4. Social Analytics Processing
   ├── Calculate social engagement metrics
   ├── Track event discovery through friends
   ├── Measure social influence on bookings
   ├── Generate social insights reports
   ├── Identify trending social events
   └── Optimize recommendation algorithms

5. Group Coordination Features
   ├── Manage group event bookings
   ├── Handle split payment processing
   ├── Coordinate group communication
   ├── Track group attendance confirmations
   ├── Manage group ticket distribution
   └── Handle group booking modifications
```

### Database Schema for EYFA
```sql
CREATE TABLE friend_event_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  friend_id UUID NOT NULL REFERENCES users(id),
  event_id INTEGER NOT NULL REFERENCES events(id),
  activity_type VARCHAR NOT NULL, -- 'viewed', 'saved', 'booked', 'attended', 'reviewed'
  activity_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE social_event_recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  event_id INTEGER NOT NULL REFERENCES events(id),
  recommendation_score DECIMAL(3,2),
  friend_count INTEGER DEFAULT 0,
  mutual_friend_ids UUID[],
  recommendation_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE group_event_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id INTEGER NOT NULL REFERENCES events(id),
  organizer_id UUID NOT NULL REFERENCES users(id),
  group_name VARCHAR,
  member_ids UUID[],
  coordination_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Tenant Management Lifecycle

### Client-Side Flow
```
1. Tenant Creation
   ├── Choose tenant type (personal/organization)
   ├── Set tenant name and description
   ├── Upload logo and branding assets
   ├── Configure initial settings and preferences
   ├── Invite founding members (organizations)
   └── Set up billing information (paid plans)

2. Tenant Context Switching
   ├── Display available tenants in dropdown
   ├── Show current tenant context clearly
   ├── Enable quick switching between tenants
   ├── Update entire UI context on switch
   ├── Preserve user state across switches
   └── Handle tenant-specific permissions

3. Member Management
   ├── Invite new members via email
   ├── Manage member roles (owner/admin/member)
   ├── Remove or suspend members
   ├── Handle membership requests
   ├── Set member permissions
   └── Monitor member activity

4. Tenant Settings
   ├── Update tenant profile information
   ├── Configure event creation permissions
   ├── Manage branding and appearance
   ├── Set up integrations and APIs
   ├── Configure billing and subscriptions
   └── Handle tenant deletion/archival
```

### Server-Side Flow
```
1. Tenant Operations
   ├── Create tenant records with unique slugs
   ├── Generate tenant-specific settings
   ├── Set up row-level security policies
   ├── Create initial owner membership
   ├── Initialize tenant-specific data
   └── Configure default permissions

2. Member Management
   ├── Process member invitations
   ├── Validate email addresses and domains
   ├── Set appropriate member roles
   ├── Handle membership acceptance/rejection
   ├── Manage role-based permissions
   └── Track membership changes

3. Context Management
   ├── Validate tenant access on each request
   ├── Enforce row-level security policies
   ├── Switch user tenant context
   ├── Update session with tenant data
   ├── Filter data by tenant boundaries
   └── Handle cross-tenant operations

4. Tenant Lifecycle Management
   ├── Handle tenant upgrades/downgrades
   ├── Process tenant deletion requests
   ├── Manage data retention policies
   ├── Transfer tenant ownership
   ├── Archive inactive tenants
   └── Ensure data isolation compliance
```

---

## Implementation Checklist

### Client-Side Components ✅
- [x] Event creation form with organizer gating
- [x] Multi-step booking flow with payment integration
- [x] Organizer application form and status display
- [x] Friends management interface
- [x] EYFA dashboard with social features
- [x] Tenant switcher and management
- [ ] Responsive design optimization
- [ ] Accessibility compliance (WCAG 2.1)

### Server-Side Actions 🔄
- [ ] Secure event CRUD operations
- [ ] Ticket booking and payment processing
- [ ] Organizer verification system
- [ ] Friend request management
- [ ] EYFA social recommendation engine
- [ ] Tenant management operations
- [ ] Comprehensive error handling
- [ ] Rate limiting and security measures

### Database Implementation 📊
- [ ] Row-level security (RLS) policies
- [ ] Multi-tenant data isolation
- [ ] Efficient indexing strategy
- [ ] Data backup and recovery procedures
- [ ] Performance optimization
- [ ] Audit logging implementation
- [ ] GDPR compliance measures
- [ ] Scalability planning

### Integration Points 🔌
- [ ] Stripe payment gateway
- [ ] M-Pesa payment integration
- [ ] Email notification service (SendGrid/SES)
- [ ] Push notification system
- [ ] Image upload and storage (S3/Cloudinary)
- [ ] QR code generation service
- [ ] Maps and geolocation APIs
- [ ] Analytics and tracking (Google Analytics/Mixpanel)

### Security & Privacy 🔒
- [ ] JWT token management
- [ ] Password hashing and salt
- [ ] API rate limiting
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] CSRF protection
- [ ] Data encryption at rest
- [ ] Privacy controls and user consent

This comprehensive lifecycle documentation provides a complete roadmap for implementing your multi-tenant event booking application with social features, ensuring proper security, scalability, and user experience.
