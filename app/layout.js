import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'bluelearn',
  description: 'Bluelearn clone web application with more features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
