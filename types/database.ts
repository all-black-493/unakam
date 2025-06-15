import { z } from 'zod';

// Tenant schema
export const TenantSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().min(1),
  domain: z.string().optional(),
  logo_url: z.string().url().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  settings: z.record(z.any()).optional(),
});

// Profile schema
export const ProfileSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  bio: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  date_of_birth: z.string().optional(),
  interests: z.array(z.string()).optional(),
  photo: z.instanceof(File).optional(),
  photo_url: z.string().url().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

// User schema
export const UserSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  email: z.string().email(),
  full_name: z.string().min(1),
  role: z.enum(['admin', 'organizer', 'user']),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

// Event schema
export const EventSchema = z.object({
  id: z.number().int().positive(),
  tenant_id: z.string().uuid(),
  category: z.string(),
  title: z.string().min(1),
  description: z.string(),
  date: z.string(),
  time: z.string(),
  location: z.string(),
  organizer: z.string(),
  organizer_id: z.string().uuid(),
  image_url: z.string().url(),
  vip_tickets: z.number().int().min(0),
  is_trending: z.boolean(),
  tickets_sold: z.number().int().min(0),
  tickets_remaining: z.number().int().min(0),
  price: z.number().min(0),
  vip_price: z.number().min(0),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  venue_details: z.record(z.any()).optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

// Ticket schema
export const TicketSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  event_id: z.number().int().positive(),
  user_id: z.string().uuid(),
  ticket_type: z.enum(['standard', 'vip']),
  ticket_number: z.string(),
  price: z.number().min(0),
  status: z.enum(['pending', 'confirmed', 'cancelled']),
  qr_code: z.string(),
  payment_method: z.enum(['stripe', 'mpesa']),
  payment_id: z.string().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

// Saved Events schema
export const SavedEventSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  user_id: z.string().uuid(),
  event_id: z.number().int().positive(),
  created_at: z.string().datetime(),
});

// Input validation schemas
export const CreateEventSchema = EventSchema.omit({
  id: true,
  tenant_id: true,
  created_at: true,
  updated_at: true,
});

export const UpdateEventSchema = CreateEventSchema.partial();

export const UpdateProfileSchema = z.object({
  bio: z.string().max(500).optional(),
  location: z.string().max(100).optional(),
  phone: z.string().regex(/^\+?[\d\s-()]+$/).optional(),
  date_of_birth: z.string().optional(),
  interests: z.array(z.string()).max(10).optional(),
  photo: z.instanceof(File).optional(),
});

export const BuyTicketSchema = z.object({
  event_id: z.number().int().positive(),
  ticket_type: z.enum(['standard', 'vip']),
  payment_method: z.enum(['stripe', 'mpesa']),
  quantity: z.number().int().min(1).max(10),
});

export const FilterEventsSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  date_from: z.string().optional(),
  date_to: z.string().optional(),
  price_min: z.number().min(0).optional(),
  price_max: z.number().min(0).optional(),
  location: z.string().optional(),
  is_trending: z.boolean().optional(),
});

export type Tenant = z.infer<typeof TenantSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type User = z.infer<typeof UserSchema>;
export type Event = z.infer<typeof EventSchema>;
export type Ticket = z.infer<typeof TicketSchema>;
export type SavedEvent = z.infer<typeof SavedEventSchema>;
export type CreateEventInput = z.infer<typeof CreateEventSchema>;
export type UpdateEventInput = z.infer<typeof UpdateEventSchema>;
export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;
export type BuyTicketInput = z.infer<typeof BuyTicketSchema>;
export type FilterEventsInput = z.infer<typeof FilterEventsSchema>;