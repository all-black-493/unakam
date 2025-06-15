'use client'

import React, { useEffect, useState } from 'react'
import { getSupabaseBrowserClient } from '@/supabase-utils/browserClient';
import { SigninForm } from '@/components/SignInForm';
import { useSearchParams, useRouter } from 'next/navigation';

export default function SignInPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPasswordLogin, setIsPasswordLogin] = useState(
    searchParams.get('magicLink') !== 'yes'
  );

  const handleToggleLoginMethod = () => {
    const newMode = !isPasswordLogin;
    setIsPasswordLogin(newMode);
    // Update URL without page reload
    router.push(`?magicLink=${newMode ? 'no' : 'yes'}`, { scroll: false });
  };

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.storage.listBuckets().then(({ data, error }) => {
      // console.log("Current login mode:", isPasswordLogin ? "Password" : "Magic Link");
      if (error) {
        console.error(error);
      }
    });
  }, [isPasswordLogin]);

  return (
    <div>
      <SigninForm 
        onToggleLoginMethod={handleToggleLoginMethod} 
        isPasswordLogin={isPasswordLogin} 
      />
    </div>
  );
}