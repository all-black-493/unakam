"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Star, Award, Target, UserPlus, MessageCircle, Share2, Heart } from 'lucide-react';

const EYFA = () => {
  const yourStats = {
    eventsAttended: 24,
    friendsConnected: 12,
    reviewsWritten: 8,
    friendsAtEvents: 15
  };

  const friendsActivity = [
    {
      id: 1,
      friend: "Alex Johnson",
      action: "is going to",
      event: "Tech Innovation Summit",
      date: "July 20, 2024",
      rating: 5,
      mutualFriends: 3,
      eventStatus: "upcoming"
    },
    {
      id: 2,
      friend: "Sarah Chen",
      action: "attended",
      event: "Art Gallery Opening",
      date: "July 10, 2024",
      rating: 4,
      mutualFriends: 2,
      eventStatus: "past"
    },
    {
      id: 3,
      friend: "Mike Rodriguez",
      action: "is interested in",
      event: "Startup Pitch Night",
      date: "July 25, 2024",
      rating: null,
      mutualFriends: 5,
      eventStatus: "upcoming"
    },
    {
      id: 4,
      friend: "Emma Wilson",
      action: "is going to",
      event: "Photography Workshop",
      date: "July 18, 2024",
      rating: null,
      mutualFriends: 1,
      eventStatus: "upcoming"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Social Explorer",
      description: "Attended events with 10+ friends",
      icon: Users,
      earned: true
    },
    {
      id: 2,
      title: "Event Connector",
      description: "Introduced 5+ friends to events",
      icon: UserPlus,
      earned: true
    },
    {
      id: 3,
      title: "Community Builder",
      description: "Organized group event attendance",
      icon: TrendingUp,
      earned: false
    },
    {
      id: 4,
      title: "Event Influencer",
      description: "Friends joined 10+ events you shared",
      icon: Share2,
      earned: false
    }
  ];

  const suggestedEvents = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "July 22, 2024",
      friendsGoing: ["Alex Johnson", "Emma Wilson", "David Kim"],
      category: "Music",
      price: 75
    },
    {
      id: 2,
      title: "Developer Meetup",
      date: "July 30, 2024",
      friendsGoing: ["Sarah Chen", "Mike Rodriguez"],
      category: "Technology",
      price: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            EYFA - Events Your Friends also Attend
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover events through your social network and see what your friends are attending
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Your Social Stats */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Your Social Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{yourStats.eventsAttended}</p>
                    <p className="text-sm text-muted-foreground">Events Attended</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{yourStats.friendsConnected}</p>
                    <p className="text-sm text-muted-foreground">Friends Connected</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{yourStats.reviewsWritten}</p>
                    <p className="text-sm text-muted-foreground">Reviews Written</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{yourStats.friendsAtEvents}</p>
                    <p className="text-sm text-muted-foreground">Friends at Events</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Social Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div 
                        key={achievement.id} 
                        className={`flex items-center gap-3 p-3 rounded-lg border ${
                          achievement.earned 
                            ? 'bg-primary/10 border-primary/20' 
                            : 'bg-muted/50 border-muted opacity-60'
                        }`}
                      >
                        <div className={`p-2 rounded-full ${
                          achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.earned && (
                          <Badge variant="secondary" className="text-xs">Earned</Badge>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Friends Activity & Suggested Events */}
          <div className="lg:col-span-2">
            {/* Friends Activity */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Friends Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {friendsActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">
                          {activity.friend.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <p className="text-sm">
                              <strong>{activity.friend}</strong> {activity.action} <strong>{activity.event}</strong>
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-muted-foreground">{activity.date}</p>
                              <Badge variant="outline" className="text-xs">
                                {activity.mutualFriends} mutual friends
                              </Badge>
                              <Badge 
                                variant={activity.eventStatus === 'upcoming' ? 'default' : 'secondary'} 
                                className="text-xs"
                              >
                                {activity.eventStatus}
                              </Badge>
                            </div>
                          </div>
                          {activity.rating && (
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 ${
                                    i < activity.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-xs">
                            View Event
                          </Button>
                          {activity.eventStatus === 'upcoming' && (
                            <Button variant="outline" size="sm" className="text-xs">
                              <Heart className="w-3 h-3 mr-1" />
                              Join Friend
                            </Button>
                          )}
                          <Button variant="outline" size="sm" className="text-xs">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">Load More Activity</Button>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Events Based on Friends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Events Your Friends Are Attending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {suggestedEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground mb-1">Friends going:</p>
                        <div className="flex flex-wrap gap-1">
                          {event.friendsGoing.map((friend, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {friend}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">
                          {event.price === 0 ? 'Free' : `$${event.price}`}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            <Share2 className="w-3 h-3 mr-1" />
                            Share
                          </Button>
                          <Button size="sm" className="text-xs">
                            Join Friends
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* User Experience Improvements */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Enhance Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Connect More Friends</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The more friends you connect, the better event recommendations you'll get.
                </p>
                <Button size="sm" variant="outline">
                  Find Friends
                </Button>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Enable Notifications</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get notified when friends join events you might be interested in.
                </p>
                <Button size="sm" variant="outline">
                  Settings
                </Button>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold mb-2">Share Your Events</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Let friends know about events you're attending to build your social circle.
                </p>
                <Button size="sm" variant="outline">
                  Share Events
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EYFA;