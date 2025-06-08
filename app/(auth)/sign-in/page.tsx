'use client'

import React, { useEffect } from 'react'
import { getSupabaseBrowserClient } from '@/supabase-utils/browserClient';

const SignIn = () => {
  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.storage.listBuckets().then(({ data, error }) => {
      console.log(data);
      if (error) {
        console.error(error);
      }
    })
  }, [])
  return (
    <div>
      <p>Sign In</p>
    </div>
  )
}

export default SignIn
