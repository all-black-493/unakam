import React from 'react';
import EventCard from '@/components/EventCard';

const EventsTrending = () => {
  const trendingEvents = [
    {
      id: 1,
      category: "Festival",
      title: "Tech Innovation Summit 2024",
      date: "July 20, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Convention Center, Downtown",
      organizer: "Tech Leaders",
      description: "The biggest tech event of the year featuring industry leaders and innovators.",
      image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      vip_tickets: 100,
      is_trending: true,
      tickets_sold: 1200,
      tickets_remaining: 300,
      price: 199,
      vip_price: 399
    },
    {
      id: 2,
      category: "Concert",
      title: "Indie Music Festival",
      date: "August 5, 2024",
      time: "4:00 PM - 11:00 PM",
      location: "Riverside Park",
      organizer: "Indie Collective",
      description: "A celebration of independent music with emerging and established artists.",
      image_url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      vip_tickets: 75,
      is_trending: true,
      tickets_sold: 850,
      tickets_remaining: 150,
      price: 85,
      vip_price: 155
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trending Events</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The hottest events everyone is talking about
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsTrending;