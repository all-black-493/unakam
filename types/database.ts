export interface Tenant {
  id: string;
  name: string;
  slug: string;
  domain?: string;
  logo_url?: string;
  type: 'personal' | 'organization';
  settings?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  organizer_status: 'none' | 'pending' | 'approved' | 'rejected';
  organizer_application_date?: string;
  current_tenant_id?: string;
  created_at: string;
  updated_at: string;
}

export interface TenantMember {
  id: string;
  tenant_id: string;
  user_id: string;
  role: 'owner' | 'admin' | 'member';
  status: 'active' | 'invited' | 'suspended';
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  bio?: string;
  location?: string;
  phone?: string;
  date_of_birth?: string;
  interests?: string[];
  photo_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: number;
  tenant_id: string;
  organizer_id: string;
  category: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  location: string;
  organizer_name: string;
  image_url: string;
  vip_tickets: number;
  is_trending: boolean;
  tickets_sold: number;
  tickets_remaining: number;
  price: number;
  vip_price: number;
  latitude?: number;
  longitude?: number;
  venue_details?: Record<string, any>;
  status: 'draft' | 'published' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface Ticket {
  id: string;
  tenant_id: string;
  event_id: number;
  user_id: string;
  ticket_type: 'standard' | 'vip';
  ticket_number: string;
  price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  qr_code: string;
  payment_method: 'stripe' | 'mpesa';
  payment_id?: string;
  created_at: string;
  updated_at: string;
}

export interface SavedEvent {
  id: string;
  user_id: string;
  event_id: number;
  created_at: string;
}

export interface Friendship {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  accepted_at?: string;
}

export interface EventAttendance {
  id: string;
  user_id: string;
  event_id: number;
  status: 'going' | 'interested' | 'not_going';
  created_at: string;
}

// Input Types
export interface FilterEventsInput {
  search?: string;
  category?: string;
  location?: string;
  is_trending?: boolean;
  date_from?: string;
  date_to?: string;
  price_min?: number;
  price_max?: number;
}

export interface BuyTicketInput {
  event_id: number;
  ticket_type: 'standard' | 'vip';
  quantity: number;
  payment_method: 'stripe' | 'mpesa';
}

export interface CreateEventInput {
  title: string;
  description?: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image_url: string;
  price: number;
  vip_price: number;
  tickets_remaining: number;
  vip_tickets: number;
}

export interface CreateTeamInput {
  name: string;
  type: 'personal' | 'organization';
  domain?: string;
  logo_url?: string;
}

export interface ApplyOrganizerInput {
  reason: string;
  experience?: string;
  portfolio_url?: string;
}