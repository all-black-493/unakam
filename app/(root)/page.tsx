"use client";

import EventCard from "@/components/EventCard";
// import { NotificationBell } from "@/components/NotificationBell";
import { SearchBar } from "@/components/SearchBar";
// import { ThemeToggle } from "@/components/ThemeToggle";

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
    },
    {
      id: 4,
      category: "Conference",
      title: "Digital Marketing Summit",
      date: "September 5, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Convention Center, Chicago",
      organizer: "Marketing Pros",
      description: "The premier event for digital marketing professionals. Learn the latest strategies, network with industry leaders, and discover new tools to grow your business.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      vipTickets: 30,
      isTrending: false,
      ticketsSold: 420,
      ticketsRemaining: 80,
      price: 199,
      vipPrice: 349
    },
    {
      id: 5,
      category: "Party",
      title: "Rooftop Summer Celebration",
      date: "July 20, 2024",
      time: "8:00 PM - 2:00 AM",
      location: "Skyline Hotel, Miami",
      organizer: "Party Central",
      description: "Dance the night away at Miami's hottest rooftop party. Premium cocktails, amazing DJs, and breathtaking city views. VIP experience includes bottle service.",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      vipTickets: 40,
      isTrending: true,
      ticketsSold: 220,
      ticketsRemaining: 30,
      price: 89,
      vipPrice: 189
    },
    {
      id: 6,
      category: "Workshop",
      title: "Photography Masterclass",
      date: "August 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Art Studio, Portland",
      organizer: "Creative Lens",
      description: "Master the art of photography with renowned photographer Sarah Mitchell. Hands-on workshop covering composition, lighting, and post-processing techniques.",
      imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
      vipTickets: 12,
      isTrending: false,
      ticketsSold: 35,
      ticketsRemaining: 15,
      price: 149,
      vipPrice: 229
    },
    {
      id: 7,
      category: "Sports",
      title: "Community Basketball Tournament",
      date: "July 25, 2024",
      time: "9:00 AM - 8:00 PM",
      location: "Metro Sports Complex, Denver",
      organizer: "Denver Sports League",
      description: "Annual basketball tournament featuring teams from across the city. Great prizes, food trucks, and family-friendly entertainment throughout the day.",
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      vipTickets: 20,
      isTrending: false,
      ticketsSold: 156,
      ticketsRemaining: 44,
      price: 25,
      vipPrice: 55
    },
    {
      id: 8,
      category: "Food & Drink",
      title: "Wine Tasting Experience",
      date: "September 12, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Vineyard Estate, Napa Valley",
      organizer: "Wine Connoisseurs",
      description: "Exclusive wine tasting featuring rare vintages and expert-led sessions. Includes gourmet appetizers and a guided tour of the vineyard grounds.",
      imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
      vipTickets: 18,
      isTrending: true,
      ticketsSold: 78,
      ticketsRemaining: 22,
      price: 125,
      vipPrice: 225
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        

        <SearchBar />

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