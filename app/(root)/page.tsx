"use client";

import EventCard from "@/components/EventCard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const sampleEvents = [
    {
      id: 1,
      category: "Concert",
      title: "Summer Music Festival 2024",
      date: "July 15, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Central Park, New York",
      organizer: "Music Events Co.",
      description: "Join us for an unforgettable night of music featuring top artists from around the world. Experience amazing performances, great food, and incredible vibes under the stars.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      vipTickets: 50,
      isTrending: true,
      ticketsSold: 850,
      ticketsRemaining: 150,
      price: 75,
      vipPrice: 150
    },
    {
      id: 2,
      category: "Workshop",
      title: "AI & Machine Learning Bootcamp",
      date: "August 10, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Hub, San Francisco",
      organizer: "TechLearn Academy",
      description: "Dive deep into the world of artificial intelligence and machine learning. Learn from industry experts and get hands-on experience with cutting-edge technologies.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      vipTickets: 25,
      isTrending: false,
      ticketsSold: 180,
      ticketsRemaining: 20,
      price: 299,
      vipPrice: 499
    },
    {
      id: 3,
      category: "Meet Up",
      title: "Startup Founders Networking",
      date: "June 28, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Center, Austin",
      organizer: "Startup Community",
      description: "Connect with fellow entrepreneurs, share ideas, and build meaningful relationships in the startup ecosystem. Perfect for founders, investors, and innovators.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      vipTickets: 15,
      isTrending: true,
      ticketsSold: 95,
      ticketsRemaining: 55,
      price: 45,
      vipPrice: 85
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Amazing{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find and book tickets for the most exciting events happening around you. 
            From concerts to workshops, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Easy Booking</h3>
              <p className="text-gray-600 dark:text-gray-300">Quick and secure ticket booking process with instant confirmation.</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Verified Events</h3>
              <p className="text-gray-600 dark:text-gray-300">All events are verified and backed by trusted organizers.</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Best Prices</h3>
              <p className="text-gray-600 dark:text-gray-300">Competitive pricing with no hidden fees or charges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};