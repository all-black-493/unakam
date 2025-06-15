'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, UserPlus, Users, MapPin } from 'lucide-react';

const FindFriends = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const suggestedFriends = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      mutualFriends: 5,
      commonEvents: 3,
      location: "San Francisco, CA",
      interests: ["Tech", "Music", "Photography"]
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c5c3?w=150&h=150&fit=crop",
      mutualFriends: 2,
      commonEvents: 1,
      location: "New York, NY",
      interests: ["Art", "Workshops", "Networking"]
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      mutualFriends: 8,
      commonEvents: 5,
      location: "Austin, TX",
      interests: ["Startups", "Music", "Sports"]
    },
    {
      id: 4,
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      mutualFriends: 3,
      commonEvents: 2,
      location: "Seattle, WA",
      interests: ["Concerts", "Food", "Travel"]
    }
  ];

  const currentFriends = [
    {
      id: 1,
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
      status: "attending 2 upcoming events",
      lastSeen: "2 hours ago"
    },
    {
      id: 2,
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop",
      status: "looking for concert buddies",
      lastSeen: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Find Friends</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Connect with people who share your interests and attend events together
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search for Friends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Search by name, interests, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Suggested Friends */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>People You May Know</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {suggestedFriends.map((friend) => (
                    <div key={friend.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={friend.avatar} alt={friend.name} />
                          <AvatarFallback>{friend.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate">{friend.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{friend.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-3 h-3" />
                            <span>{friend.mutualFriends} mutual friends</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex flex-wrap gap-1">
                          {friend.interests.map((interest) => (
                            <Badge key={interest} variant="secondary" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {friend.commonEvents} events in common
                        </p>
                      </div>
                      
                      <Button size="sm" className="w-full">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Friend
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Friends */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Friends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentFriends.map((friend) => (
                    <div key={friend.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{friend.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{friend.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{friend.status}</p>
                        <p className="text-xs text-muted-foreground">Active {friend.lastSeen}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full mt-4">
                    View All Friends
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Friend Activity */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Friend Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-muted/50 rounded">
                    <p><strong>John</strong> is attending <strong>Tech Conference</strong></p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="p-2 bg-muted/50 rounded">
                    <p><strong>Lisa</strong> saved <strong>Jazz Night</strong></p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                  <div className="p-2 bg-muted/50 rounded">
                    <p><strong>Mike</strong> reviewed <strong>Art Exhibition</strong></p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
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

export default FindFriends;