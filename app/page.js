import Link from 'next/link'
import RootLayout from './layout'
import GoToHomeBtn from '@/components/dashboard/GoToHomeBtn'

export default function Home() {
  return (
    <RootLayout showSidebar={false}>
      <main className="mt-20">
        <GoToHomeBtn />
      </main>
    </RootLayout>
  )
}
