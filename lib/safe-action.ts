import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

const getCurrentUser = () => ({
  id: "550e8400-e29b-41d4-a716-446655440001",
  email: "user@example.com",
  full_name: "John Doe",
  organizer_status: "approved" as const,
  current_tenant_id: "550e8400-e29b-41d4-a716-446655440000",
});

const getCurrentTenant = () => ({
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: "Personal Events",
  slug: "personal",
  type: "personal" as const,
});

export const actionClient = createSafeActionClient({
  handleServerError: (e) => {
    console.error("Action error:", e);
    return "Something went wrong";
  },
});

export const authenticatedActionClient = actionClient.use(async ({ next, ctx }) => {
  const user = getCurrentUser();
  
  if (!user) {
    throw new Error("Unauthorized");
  }

  return next({
    ctx: {
      ...ctx,
      user,
    },
  });
});

export const tenantActionClient = authenticatedActionClient.use(async ({ next, ctx }) => {
  const tenant = getCurrentTenant();
  
  if (!tenant) {
    throw new Error("No tenant context");
  }

  return next({
    ctx: {
      ...ctx,
      tenant,
    },
  });
});

export const organizerActionClient = tenantActionClient.use(async ({ next, ctx }) => {
  if (ctx.user.organizer_status !== "approved") {
    throw new Error("Organizer approval required");
  }

  return next({ ctx });
});

export const adminActionClient = tenantActionClient.use(async ({ next, ctx }) => {
  const userRole = "owner"; 
  
  if (userRole !== "owner" && userRole !== "admin") {
    throw new Error("Admin access required");
  }

  return next({ ctx });
});

// Validation schemas
export const CreateEventSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(1, "Location is required"),
  image_url: z.string().url("Valid image URL required"),
  price: z.number().min(0, "Price must be positive"),
  vip_price: z.number().min(0, "VIP price must be positive"),
  tickets_remaining: z.number().min(1, "Must have at least 1 ticket"),
  vip_tickets: z.number().min(0, "VIP tickets must be non-negative"),
});

export const CreateTeamSchema = z.object({
  name: z.string().min(1, "Team name is required").max(50),
  type: z.enum(["personal", "organization"]),
  domain: z.string().optional(),
  logo_url: z.string().url().optional(),
});

export const ApplyOrganizerSchema = z.object({
  reason: z.string().min(50, "Please provide at least 50 characters explaining why you want to become an organizer"),
  experience: z.string().optional(),
  portfolio_url: z.string().url().optional(),
});

export const BuyTicketSchema = z.object({
  event_id: z.number().positive(),
  ticket_type: z.enum(["standard", "vip"]),
  quantity: z.number().min(1).max(10),
  payment_method: z.enum(["stripe", "mpesa"]),
});