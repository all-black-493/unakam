"use client";

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Camera, MapPin, Phone, Calendar, User, Edit3, Save, X } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useProfile, useUpdateProfile } from '@/hooks/use-profile';
import { UpdateProfileSchema, UpdateProfileInput } from '@/types/database';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [newInterest, setNewInterest] = useState('');
  
  const { data: profile, isLoading } = useProfile();
  const updateProfileMutation = useUpdateProfile();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UpdateProfileInput>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      bio: profile?.bio || '',
      location: profile?.location || '',
      phone: profile?.phone || '',
      date_of_birth: profile?.date_of_birth || '',
      interests: profile?.interests || [],
    },
  });

  const watchedInterests = watch('interests') || [];

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setValue('photo', file);
        toast.success("Photo updated", {
          description: "Your profile photo has been updated.",
        });
      } else {
        toast.error("Invalid file", {
          description: "Please upload an image file.",
        });
      }
    }
  }, [setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setValue('photo', e.target.files[0]);
      toast.success("Photo updated", {
        description: "Your profile photo has been updated.",
      });
    }
  };

  const addInterest = () => {
    if (newInterest.trim() && !watchedInterests.includes(newInterest.trim())) {
      setValue('interests', [...watchedInterests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setValue('interests', watchedInterests.filter(i => i !== interest));
  };

  const onSubmit = (data: UpdateProfileInput) => {
    updateProfileMutation.mutate(data, {
      onSuccess: () => {
        setIsEditing(false);
        toast.success("Profile updated", {
          description: "Your profile has been successfully updated.",
        });
      },
      onError: () => {
        toast.error("Error", {
          description: "Failed to update profile. Please try again.",
        });
      },
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="relative overflow-hidden">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">My Profile</CardTitle>
              <Button
                variant={isEditing ? "outline" : "default"}
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit3 className="h-4 w-4 mr-2" />}
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Profile Photo Section */}
              <div className="flex flex-col items-center space-y-4">
                <div
                  className={`relative group ${isEditing ? 'cursor-pointer' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Avatar className="h-32 w-32">
                    <AvatarImage 
                      src={profile?.photo_url} 
                      alt="Profile photo" 
                    />
                    <AvatarFallback>
                      <User className="h-16 w-16" />
                    </AvatarFallback>
                  </Avatar>
                  
                  {isEditing && (
                    <>
                      <div className={`absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${dragActive ? 'opacity-100 bg-primary bg-opacity-20' : ''}`}>
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </>
                  )}
                </div>
                
                {isEditing && (
                  <p className="text-sm text-muted-foreground text-center">
                    Click to upload or drag and drop an image
                  </p>
                )}
              </div>

              {/* User Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself..."
                        {...register('bio')}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {profile?.bio || "No bio added yet"}
                      </p>
                    )}
                    {errors.bio && (
                      <p className="text-sm text-destructive">{errors.bio.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="location">
                      <MapPin className="h-4 w-4 inline mr-2" />
                      Location
                    </Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        placeholder="Your location"
                        {...register('location')}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {profile?.location || "No location added"}
                      </p>
                    )}
                    {errors.location && (
                      <p className="text-sm text-destructive">{errors.location.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Phone
                    </Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        {...register('phone')}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {profile?.phone || "No phone number added"}
                      </p>
                    )}
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="date_of_birth">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Date of Birth
                    </Label>
                    {isEditing ? (
                      <Input
                        id="date_of_birth"
                        type="date"
                        {...register('date_of_birth')}
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {profile?.date_of_birth || "No date of birth added"}
                      </p>
                    )}
                    {errors.date_of_birth && (
                      <p className="text-sm text-destructive">{errors.date_of_birth.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Interests Section */}
              <div>
                <Label>Interests</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {watchedInterests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {interest}
                      {isEditing && (
                        <button
                          type="button"
                          onClick={() => removeInterest(interest)}
                          className="ml-2 text-muted-foreground hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>
                
                {isEditing && (
                  <div className="flex gap-2 mt-3">
                    <Input
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      placeholder="Add an interest"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                    />
                    <Button type="button" onClick={addInterest} variant="outline">
                      Add
                    </Button>
                  </div>
                )}
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={updateProfileMutation.isPending}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Profile;