import React from 'react';
import EventCard from '@/components/EventCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Bookmark } from 'lucide-react';

const SavedEvents = () => {
  const savedEvents = [
    {
      id: 1,
      category: "Workshop",
      title: "Advanced React Patterns",
      date: "July 10, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Tech Hub, Silicon Valley",
      organizer: "React Masters",
      description: "Deep dive into advanced React patterns and best practices.",
      image_url: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
      vip_tickets: 15,
      is_trending: false,
      tickets_sold: 45,
      tickets_remaining: 5,
      price: 149,
      vip_price: 249
    },
    {
      id: 2,
      category: "Concert",
      title: "Classical Music Evening",
      date: "August 12, 2024",
      time: "7:30 PM - 10:00 PM",
      location: "Symphony Hall",
      organizer: "City Orchestra",
      description: "An elegant evening of classical masterpieces.",
      image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      vip_tickets: 25,
      is_trending: true,
      tickets_sold: 180,
      tickets_remaining: 20,
      price: 75,
      vip_price: 125
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Saved Events</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Events you've bookmarked and want to attend
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {savedEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>{savedEvents.length} events saved</span>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 hover:bg-muted rounded-md text-sm">
                    Export to Calendar
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded-md text-sm">
                    Share Saved Events
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded-md text-sm">
                    Clear All Saved
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedEvents;