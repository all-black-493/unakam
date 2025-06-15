'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Calendar, Users, Navigation } from 'lucide-react';

const PlacesView = () => {
  const [searchLocation, setSearchLocation] = useState('');

  // Sample places with events - ready for Google Places API integration
  const placesWithEvents = [
    {
      id: 1,
      name: "Convention Center Downtown",
      address: "123 Main St, Downtown",
      distance: "0.8 miles",
      placeId: "ChIJ123...", // Google Places API place_id
      coordinates: { lat: 40.7128, lng: -74.0060 },
      events: [
        {
          id: 1,
          title: "Tech Innovation Summit",
          date: "June 20, 2024",
          time: "9:00 AM - 6:00 PM",
          attendees: 500,
          category: "Conference"
        },
        {
          id: 2,
          title: "Startup Pitch Competition",
          date: "June 25, 2024", 
          time: "2:00 PM - 7:00 PM",
          attendees: 200,
          category: "Competition"
        }
      ]
    },
    {
      id: 2,
      name: "Riverside Park Amphitheater",
      address: "456 River Rd, Riverside",
      distance: "1.2 miles",
      placeId: "ChIJ456...",
      coordinates: { lat: 40.7180, lng: -74.0070 },
      events: [
        {
          id: 3,
          title: "Summer Music Festival",
          date: "July 15, 2024",
          time: "4:00 PM - 11:00 PM",
          attendees: 1200,
          category: "Festival"
        }
      ]
    },
    {
      id: 3,
      name: "Art Gallery Central",
      address: "789 Art Ave, Arts District",
      distance: "2.1 miles",
      placeId: "ChIJ789...",
      coordinates: { lat: 40.7200, lng: -74.0080 },
      events: [
        {
          id: 4,
          title: "Photography Exhibition Opening",
          date: "June 18, 2024",
          time: "6:00 PM - 9:00 PM",
          attendees: 80,
          category: "Exhibition"
        },
        {
          id: 5,
          title: "Artist Workshop Series",
          date: "June 22, 2024",
          time: "10:00 AM - 4:00 PM",
          attendees: 25,
          category: "Workshop"
        }
      ]
    },
    {
      id: 4,
      name: "Community Sports Complex",
      address: "321 Sports Way, Westside",
      distance: "3.5 miles",
      placeId: "ChIJ321...",
      coordinates: { lat: 40.7100, lng: -74.0090 },
      events: [
        {
          id: 6,
          title: "City Basketball Tournament",
          date: "July 1, 2024",
          time: "8:00 AM - 8:00 PM",
          attendees: 300,
          category: "Sports"
        }
      ]
    }
  ];

  const handleSearchLocation = () => {
    // This is where Google Places API integration will happen
    console.log('Searching for location:', searchLocation);
    // TODO: Integrate with Google Places API to search for venues
  };

  const getDirections = (place: typeof placesWithEvents[0]) => {
    // This will integrate with Google Maps for directions
    console.log('Getting directions to:', place.name);
    // TODO: Open Google Maps with directions
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Places View</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover events happening at specific locations in your city
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search for venues, neighborhoods, or landmarks..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button onClick={handleSearchLocation} className="shrink-0">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              * Google Places API integration ready - will show real venue data
            </p>
          </CardContent>
        </Card>

        {/* Places with Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {placesWithEvents.map((place) => (
            <Card key={place.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{place.name}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{place.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Navigation className="w-4 h-4" />
                      <span>{place.distance} away</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => getDirections(place)}
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Directions
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{place.events.length} upcoming events</span>
                  </div>
                  
                  <div className="space-y-3">
                    {place.events.map((event) => (
                      <div key={event.id} className="p-3 border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {event.category}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                        
                        <Button size="sm" className="w-full mt-2 text-xs">
                          View Event Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Note */}
        <Card className="mt-8 border-dashed border-2">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-semibold">Google Places API Integration Ready</h3>
              <p className="text-sm text-muted-foreground">
                This page is prepared for Google Places API integration. Add your Google Places API key to enable:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Real venue search and autocomplete</li>
                <li>• Actual place photos and details</li>
                <li>• Live location data and ratings</li>
                <li>• Integration with Google Maps for directions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlacesView;