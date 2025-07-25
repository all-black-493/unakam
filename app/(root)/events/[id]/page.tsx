"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, Clock, MapPin, User, Ticket, ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from "sonner"
import PaymentMethodSelection from '@/components/PaymentMethodModal';

const EventDetails = () => {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();

  const [regularTickets, setRegularTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);
  const [showPaymentSelection, setShowPaymentSelection] = useState(false);

  const events = [
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

  const event = events.find(e => e.id === parseInt((id as string) || '0'));

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Event Not Found</h1>
          <Button onClick={() => router.push('/')}>Return to Events</Button>
        </div>
      </div>
    );
  }

  const totalTickets = regularTickets + vipTickets;
  const totalPrice = (regularTickets * event.price) + (vipTickets * event.vipPrice);

  const handleTicketChange = (type: 'regular' | 'vip', action: 'increase' | 'decrease') => {
    if (type === 'regular') {
      if (action === 'increase') {
        setRegularTickets(prev => prev + 1);
      } else {
        setRegularTickets(prev => Math.max(0, prev - 1));
      }
    } else {
      if (action === 'increase') {
        setVipTickets(prev => prev + 1);
      } else {
        setVipTickets(prev => Math.max(0, prev - 1));
      }
    }
  };

  const handleSelectTickets = () => {
    if (totalTickets === 0) {
      toast.warning("No tickets selected", {
        description: "Please select at least one ticket to proceed.",
      });
      return;
    }

    setShowPaymentSelection(true);
  };

  const handlePaymentMethod = (method: 'stripe' | 'mpesa') => {
    toast.success('Payment Method Selected', {
      description: `Proceeding with ${method === 'stripe' ? 'Credit Card Payment' : 'M-PESA STK Push'} for $${totalPrice}`,
    });
    setShowPaymentSelection(false);
    // Integrate with the actual payment processing
  };

  if (showPaymentSelection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <PaymentMethodSelection
          totalAmount={totalPrice}
          onMethodSelected={handlePaymentMethod}
          onCancel={() => setShowPaymentSelection(false)}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-white/90 text-gray-800 mb-2">
                  {event.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {event.title}
                </h1>
              </div>
            </div>

            {/* Event Details */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Event Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">{event.date}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="font-medium">{event.time}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-medium">{event.location}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <User className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">{event.organizer}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About This Event</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          </div>

          {/* Ticket Purchase Section */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Purchase Tickets</h2>

              {/* Regular Tickets */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Regular Ticket</h3>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">${event.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleTicketChange('regular', 'decrease')}
                      disabled={regularTickets === 0}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{regularTickets}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleTicketChange('regular', 'increase')}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* VIP Tickets */}
                <div className="flex justify-between items-center p-4 border border-yellow-200 dark:border-yellow-800 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">VIP Ticket</h3>
                      <Badge variant="outline" className="text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-600">
                        <Ticket className="w-3 h-3 mr-1" />
                        {event.vipTickets} left
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">${event.vipPrice}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleTicketChange('vip', 'decrease')}
                      disabled={vipTickets === 0}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{vipTickets}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleTicketChange('vip', 'increase')}
                      disabled={vipTickets >= event.vipTickets}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              {totalTickets > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    {regularTickets > 0 && (
                      <div className="flex justify-between">
                        <span>{regularTickets} × Regular Ticket</span>
                        <span>${regularTickets * event.price}</span>
                      </div>
                    )}
                    {vipTickets > 0 && (
                      <div className="flex justify-between">
                        <span>{vipTickets} × VIP Ticket</span>
                        <span>${vipTickets * event.vipPrice}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Purchase Button */}
              <Button
                onClick={handleSelectTickets}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                disabled={totalTickets === 0}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {totalTickets === 0 ? 'Select Tickets' : `Select Payment Method`}
              </Button>

              {/* Ticket Info */}
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                <p>• Tickets are non-refundable</p>
                <p>• VIP tickets include premium seating and refreshments</p>
                <p>• Digital tickets will be sent to your email</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;