"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateTeamSchema } from '@/lib/safe-action';
import { CreateTeamInput } from '@/types/database';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Building2, Users, Globe } from 'lucide-react';
import { toast } from 'sonner';

interface CreateTeamDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: (team: any) => void;
}

export const CreateTeamDialog = ({ open, onOpenChange, onSuccess }: CreateTeamDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateTeamInput>({
    resolver: zodResolver(CreateTeamSchema),
    defaultValues: {
      name: '',
      type: 'organization',
      domain: '',
      logo_url: '',
    },
  });

  const teamType = form.watch('type');

  const onSubmit = async (data: CreateTeamInput) => {
    setIsSubmitting(true);
    try {
      // Mock API call - replace with actual createTeamAction
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Creating team:', data);
      
      toast.success(`"${data.name}" has been created and you are now the owner.`);

      onSuccess?.(data);
      onOpenChange(false);
      form.reset();
    } catch (error) {
      toast.error("Error creating team. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Create New Team
          </DialogTitle>
          <DialogDescription>
            Create a new team or organization to manage events and collaborate with others.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Event Organization" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be visible to team members and event attendees.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Team Type
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personal">
                        <div className="flex flex-col items-start">
                          <span>Personal</span>
                          <span className="text-xs text-muted-foreground">For individual use</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="organization">
                        <div className="flex flex-col items-start">
                          <span>Organization</span>
                          <span className="text-xs text-muted-foreground">For teams and companies</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {teamType === 'organization' && (
              <>
                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Domain (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="mycompany.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        Associate this team with your company domain.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="logo_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Logo URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/logo.png" {...field} />
                      </FormControl>
                      <FormDescription>
                        Provide a URL to your organization's logo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <DialogFooter className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Team"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
