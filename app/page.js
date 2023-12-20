"use client"



import GoToHomeBtn from '@/components/dashboard/GoToHomeBtn';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {


  const router = useRouter();

  useEffect(() => {
    router.push("/home")
  },[])
  
  return (
      <main className="mt-20 ml-60">
        <div className='h-10 w-full bg-black text-white flex items-center justify-center rounded-full '>
          <GoToHomeBtn />
        </div>
        <h2 className='text-center mt-10'>Click above button</h2>
      </main>
  )
}
