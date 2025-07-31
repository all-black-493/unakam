import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Profile, UpdateProfileInput } from '@/types/database';

// Generate Gravatar URL
const generateGravatarUrl = (email: string) => {
  const hash = btoa(email.toLowerCase().trim());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
};

// Mock API functions
const fetchProfile = async (): Promise<Profile | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock profile data
  const mockProfile: Profile = {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: "550e8400-e29b-41d4-a716-446655440001",
    bio: "Event enthusiast and music lover",
    location: "New York, NY",
    phone: "+1-234-567-8900",
    date_of_birth: "1990-01-15",
    interests: ["Music", "Technology", "Travel", "Photography"],
    photo_url: generateGravatarUrl("john@example.com"),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  return mockProfile;
};

const updateProfile = async (data: UpdateProfileInput): Promise<Profile> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Updating profile with:', data);
  
  // Mock updated profile
  const updatedProfile: Profile = {
    id: "550e8400-e29b-41d4-a716-446655440010",
    user_id: "550e8400-e29b-41d4-a716-446655440001",
    bio: data.bio || "Event enthusiast and music lover",
    location: data.location || "New York, NY",
    phone: data.phone || "+1-234-567-8900",
    date_of_birth: data.date_of_birth || "1990-01-15",
    interests: data.interests || ["Music", "Technology", "Travel", "Photography"],
    photo_url: data.photo ? URL.createObjectURL(data.photo) : generateGravatarUrl("john@example.com"),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  return updatedProfile;
};

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: 5 * 60 * 1000,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};