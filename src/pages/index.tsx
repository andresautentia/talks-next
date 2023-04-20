import { Inter } from 'next/font/google'
import { Footer } from '@/core/components/Footer/Footer'
import { Header } from '@/core/components/Header/Header'
import { HomeContent } from '@/core/templates/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <div className="App">
                <Header />
                <HomeContent />
                <Footer />
            </div>
        </>
    )
}
