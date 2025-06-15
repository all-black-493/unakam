'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';
import EventCard from '@/components/EventCard';

const FilterEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const sampleEvents = [
    {
      id: 1,
      category: "Concert",
      title: "Rock Concert Night",
      date: "June 25, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Music Hall",
      organizer: "Rock Events",
      description: "An electrifying night of rock music.",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      vipTickets: 30,
      isTrending: true,
      ticketsSold: 200,
      ticketsRemaining: 50,
      price: 55,
      vipPrice: 95
    }
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedFilters([]);
    setPriceRange([0, 500]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Filter Events</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find the perfect events using our advanced filters
          </p>
        </div>

        {/* Horizontal Filter Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Search */}
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="min-w-[150px]">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concert">Concert</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="meetup">Meet Up</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Quick Filters */}
              <div className="flex gap-2">
                {['Trending', 'VIP Available', 'Free Events', 'This Week'].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilters.includes(filter) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(filter)}
                    className="whitespace-nowrap"
                  >
                    <Filter className="w-3 h-3 mr-1" />
                    {filter}
                  </Button>
                ))}
              </div>

              {/* Clear Filters */}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedCategory || selectedFilters.length > 0) && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchTerm && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchTerm}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchTerm('')} />
                  </Badge>
                )}
                {selectedCategory && (
                  <Badge variant="secondary" className="gap-1">
                    Category: {selectedCategory}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('')} />
                  </Badge>
                )}
                {selectedFilters.map((filter) => (
                  <Badge key={filter} variant="secondary" className="gap-1">
                    {filter}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => toggleFilter(filter)} />
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sampleEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* No Results */}
        {sampleEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 opacity-50">
              <Filter className="w-full h-full" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters to see more results.</p>
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterEvents;