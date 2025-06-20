"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateEventSchema } from '@/lib/safe-action';
import { CreateEventInput } from '@/types/database';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar, Clock, MapPin, DollarSign, Ticket, Image, Tags } from 'lucide-react';
import { toast } from 'sonner';

const categories = [
  'Concert', 'Conference', 'Workshop', 'Networking', 'Art & Culture',
  'Sports', 'Food & Drink', 'Technology', 'Business', 'Health & Wellness'
];

interface CreateEventFormProps {
  onSuccess?: (event: any) => void;
  onCancel?: () => void;
}

export const CreateEventForm = ({ onSuccess, onCancel }: CreateEventFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateEventInput>({
    resolver: zodResolver(CreateEventSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      date: '',
      time: '',
      location: '',
      image_url: '',
      price: 0,
      vip_price: 0,
      tickets_remaining: 100,
      vip_tickets: 10,
    },
  });

  const onSubmit = async (data: CreateEventInput) => {
    setIsSubmitting(true);
    try {
      // Mock API call - replace with actual createEventAction
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Creating event:', data);
      
      toast.success(`"${data.title}" has been created successfully!`);

      onSuccess?.(data);
    } catch (error) {
      toast.error("Error creating event. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Create New Event
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Organizer Required</Badge>
          <Badge variant="outline">Multi-tenant Support</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Summer Music Festival 2024" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your event..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Tags className="w-4 h-4" />
                        Category
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Image className="w-4 h-4" />
                        Event Image URL
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormDescription>
                        Provide a URL to an image that represents your event
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Event Details</h3>
                
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Date
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Time
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="7:00 PM - 11:00 PM" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Central Park, New York" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Pricing & Tickets */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          Standard Price
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="75" 
                            {...field}
                            onChange={e => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="vip_price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>VIP Price</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="150" 
                            {...field}
                            onChange={e => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="tickets_remaining"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Ticket className="w-4 h-4" />
                          Standard Tickets
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="100" 
                            {...field}
                            onChange={e => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="vip_tickets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>VIP Tickets</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="10" 
                            {...field}
                            onChange={e => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-6 border-t">
              {onCancel && (
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
              )}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating Event..." : "Create Event"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
