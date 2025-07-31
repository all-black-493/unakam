'use client'
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format, isSameDay } from 'date-fns';
import { Clock, MapPin, Users } from 'lucide-react';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Sample events data with dates
  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      date: new Date(2024, 5, 15), // June 15, 2024
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center",
      attendees: 250,
      category: "Conference",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Jazz Night",
      date: new Date(2024, 5, 18), // June 18, 2024
      time: "7:00 PM - 11:00 PM",
      location: "Blue Note Club",
      attendees: 80,
      category: "Concert",
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Photography Workshop",
      date: new Date(2024, 5, 20), // June 20, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Art Studio",
      attendees: 25,
      category: "Workshop",
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Startup Meetup",
      date: new Date(2024, 5, 22), // June 22, 2024
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Hub",
      attendees: 60,
      category: "Meetup",
      color: "bg-orange-500"
    }
  ];

  // Get events for selected date
  const selectedDateEvents = selectedDate 
    ? events.filter(event => isSameDay(event.date, selectedDate))
    : [];

  // Get dates that have events
  const eventDates = events.map(event => event.date);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Calendar View</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            View all your events in a beautiful calendar layout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Event Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border w-full pointer-events-auto"
                  modifiers={{
                    eventDay: eventDates,
                  }}
                  modifiersStyles={{
                    eventDay: { 
                      backgroundColor: 'hsl(var(--primary))', 
                      color: 'white',
                      fontWeight: 'bold'
                    },
                  }}
                />
                
                {/* Event indicators legend */}
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Legend</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-primary"></div>
                      <span>Days with events</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Overview */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>This Month's Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${event.color} mt-1.5`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{format(event.date, 'MMM dd, yyyy')}</p>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selected Date Events */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>
                  {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : 'Select a Date'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event) => (
                      <div key={event.id} className="p-4 border rounded-lg bg-card">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <Badge variant="secondary">{event.category}</Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t">
                          <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md text-sm font-medium transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <div className="w-12 h-12 mx-auto mb-4 opacity-50">
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                    </div>
                    <p>No events scheduled for this date</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;