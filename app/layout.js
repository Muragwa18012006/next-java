import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/app/context/ThemeContext'
import AuthProviser from '@/components/AuthProvider/AuthProviser'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OLIVE Company',
  description: 'Generated by chriss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProviser>
        <div className='container'>
        <Navbar />
        {children}
        <Footer />
        </div>
        </AuthProviser>
        </ThemeProvider>
        </body>
        
    </html>
  )
}