import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Cybit - Tech Solutions & Support',
    description: 'Cybit provides cutting-edge software solutions and expert tech support to help businesses of all sizes thrive in the digital age.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-background`}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}
