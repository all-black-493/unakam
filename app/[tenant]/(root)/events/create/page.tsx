'use client';

import React from 'react';
import { CreateEventForm } from '@/components/CreateEventForm';
import { useRouter } from 'next/navigation';

const CreateEvent = () => {
  const router = useRouter();

  const handleSuccess = (event: any) => {
    router.push('/events');
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <CreateEventForm onSuccess={handleSuccess} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default CreateEvent;
