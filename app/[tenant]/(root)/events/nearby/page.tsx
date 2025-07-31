import React from 'react';
import EventCard from '@/components/EventCard';

const EventsNearby = () => {
  const nearbyEvents = [
    {
      id: 1,
      category: "Concert",
      title: "Local Jazz Night",
      date: "June 15, 2024",
      time: "8:00 PM - 11:00 PM",
      location: "Downtown Jazz Club, 0.5 miles away",
      organizer: "Jazz Society",
      description: "Experience smooth jazz with local artists in an intimate setting.",
      image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      vip_tickets: 20,
      is_trending: true,
      tickets_sold: 45,
      tickets_remaining: 35,
      price: 35,
      vip_price: 65
    },
    {
      id: 2,
      category: "Workshop",
      title: "Photography Basics",
      date: "June 18, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center, 1.2 miles away",
      organizer: "Photo Academy",
      description: "Learn the fundamentals of photography with hands-on practice.",
      image_url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      vip_tickets: 10,
      is_trending: false,
      tickets_sold: 25,
      tickets_remaining: 15,
      price: 89,
      vip_price: 129
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Events Nearby</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover exciting events happening close to your location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsNearby;