'use client'
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Ticket, TrendingUp, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { QuickBuyTicket } from '@/components/QuickBuyTicket';
import { useSaveEvent } from '@/hooks/useEvents';
import { motion } from 'framer-motion';

interface EventCardProps {
  id: number;
  category: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  description: string;
  image_url: string;
  vip_tickets: number;
  is_trending: boolean;
  tickets_sold: number;
  tickets_remaining: number;
  price: number;
  vip_price: number;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  category,
  title,
  date,
  time,
  location,
  organizer,
  description,
  image_url,
  vip_tickets,
  is_trending,
  tickets_sold,
  tickets_remaining,
  price,
  vip_price
}) => {
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: saveEvent } = useSaveEvent();
  const totalTickets = tickets_sold + tickets_remaining;
  const soldPercentage = (tickets_sold / totalTickets) * 100;

  const handleViewDetails = () => {
    console.log('View Details clicked for event ID:', id); // Check if ID is correct
    console.log('Attempting to navigate to:', `/details/${id}`);

    try {
      router.push(`/events/${id}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleSaveEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
    saveEvent(id, {
      onSuccess: () => {
        setIsSaved(!isSaved);
        toast.success(isSaved ? "Event removed from saved" : "Event saved!",
          {
            description: isSaved ? "Event has been removed from your saved events." : "Event has been added to your saved events.",
          }
        );
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
    <Card className="group relative overflow-hidden bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 max-w-md mx-auto neon-border">
      <Button
        variant="ghost"
        size="icon"
        className={`absolute top-4 left-4 z-20 rounded-full ${isSaved
          ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400'
          : 'bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400'
          } hover:scale-110 transition-all`}
        onClick={handleSaveEvent}
      >
        <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
      </Button>
      {/* Trending Badge */}
      {is_trending && (
        <div className="absolute top-4 right-4 z-20">
          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
            <TrendingUp className="w-3 h-3" />
            Trending
          </Badge>
        </div>
      )}

      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image_url}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium">
            {category}
          </Badge>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Event Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">{date}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">{time}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <User className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium">{organizer}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Ticket Information */}
        <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          {/* VIP Tickets */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Ticket className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">VIP Tickets</span>
            </div>
            <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800">
              {vip_tickets} available
            </Badge>
          </div>

          {/* Tickets Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Tickets Sold</span>
              <span className="font-medium text-gray-900 dark:text-white">{tickets_sold} / {totalTickets}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${soldPercentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {tickets_remaining} tickets remaining
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="space-y-1">
            <div className="text-sm text-gray-600 dark:text-gray-400">Regular</div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">${price}</div>
          </div>
          <div className="space-y-1 text-right">
            <div className="text-sm text-gray-600 dark:text-gray-400">VIP</div>
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">${vip_price}</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="grid grid-cols-2 gap-3 pt-4">
            <QuickBuyTicket
              eventId={id}
              regularPrice={price}
              vipPrice={vip_price}
              eventTitle={title}
            />
            <Button 
              onClick={handleViewDetails}
              variant="outline"
              className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Details
            </Button>
          </div>
      </div>
    </Card>
    </motion.div>
  );
};

export default EventCard;