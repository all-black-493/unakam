import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Event, FilterEventsInput, BuyTicketInput } from '@/types/database';

// Mock API functions (replace with actual API calls)
const fetchEvents = async (filters?: FilterEventsInput): Promise<Event[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock data - replace with actual API call
  const mockEvents: Event[] = [
    {
      id: 1,
      tenant_id: "550e8400-e29b-41d4-a716-446655440000",
      category: "Concert",
      title: "Summer Music Festival 2024",
      date: "July 15, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Central Park, New York",
      organizer_name: "Music Events Co.",
      organizer_id: "550e8400-e29b-41d4-a716-446655440001",
      description: "Join us for an unforgettable night of music featuring top artists from around the world.",
      image_url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      vip_tickets: 50,
      is_trending: true,
      tickets_sold: 850,
      tickets_remaining: 150,
      price: 75,
      vip_price: 150,
      status: 'published',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ];

  // Apply filters (simplified)
  let filteredEvents = mockEvents;
  if (filters?.search) {
    filteredEvents = filteredEvents.filter(event => 
      event.title.toLowerCase().includes(filters.search!.toLowerCase())
    );
  }
  if (filters?.category) {
    filteredEvents = filteredEvents.filter(event => 
      event.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }

  return filteredEvents;
};

const buyTicket = async (ticketData: BuyTicketInput): Promise<{ success: boolean; ticketId: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, ticketId: crypto.randomUUID() };
};

const saveEvent = async (eventId: number): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 300));
};

export const useEvents = (filters?: FilterEventsInput) => {
  return useQuery({
    queryKey: ['events', filters],
    queryFn: () => fetchEvents(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useEvent = (id: number) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const events = await fetchEvents();
      return events.find(event => event.id === id) || null;
    },
    enabled: !!id,
  });
};

export const useBuyTicket = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: buyTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['tickets'] });
    },
  });
};

export const useSaveEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: saveEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['savedEvents'] });
    },
  });
};