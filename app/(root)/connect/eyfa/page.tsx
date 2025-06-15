'use client'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, TrendingUp, Star, Award, Target } from 'lucide-react';

const EYFA = () => {
  const yourStats = {
    eventsAttended: 24,
    friendsConnected: 12,
    reviewsWritten: 8,
    favoritesAdded: 15
  };

  const friendsActivity = [
    {
      id: 1,
      friend: "Alex Johnson",
      action: "attended",
      event: "Tech Innovation Summit",
      date: "2 days ago",
      rating: 5
    },
    {
      id: 2,
      friend: "Sarah Chen",
      action: "reviewed",
      event: "Art Gallery Opening",
      date: "1 week ago",
      rating: 4
    },
    {
      id: 3,
      friend: "Mike Rodriguez",
      action: "saved",
      event: "Startup Pitch Night",
      date: "3 days ago",
      rating: null
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Event Explorer",
      description: "Attended 20+ events",
      icon: Calendar,
      earned: true
    },
    {
      id: 2,
      title: "Social Butterfly",
      description: "Connected with 10+ friends",
      icon: Users,
      earned: true
    },
    {
      id: 3,
      title: "Trendsetter",
      description: "Attended 5 trending events",
      icon: TrendingUp,
      earned: false
    },
    {
      id: 4,
      title: "Event Critic",
      description: "Written 10+ reviews",
      icon: Star,
      earned: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            EYFA - Events You've Followed & Attended
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Track your event journey and see what your friends are up to
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Your Stats */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Your Stats
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
                    <p className="text-2xl font-bold text-primary">{yourStats.favoritesAdded}</p>
                    <p className="text-sm text-muted-foreground">Favorites Added</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Achievements
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

          {/* Friends Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Friends Activity</CardTitle>
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
                            <p className="text-xs text-muted-foreground">{activity.date}</p>
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
                          {activity.action === 'reviewed' && (
                            <Button variant="outline" size="sm" className="text-xs">
                              Read Review
                            </Button>
                          )}
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

            {/* Recent Events */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Your Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Tech Innovation Summit</h3>
                      <Badge variant="secondary">Attended</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">June 15, 2024</p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">Your rating</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Write Review
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">Photography Workshop</h3>
                      <Badge variant="outline">Saved</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">June 20, 2024</p>
                    <p className="text-xs text-muted-foreground mb-2">Upcoming event</p>
                    <Button variant="outline" size="sm" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EYFA;