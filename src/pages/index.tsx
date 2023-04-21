import { Footer } from '@/core/components/Footer/Footer'
import { Header } from '@/core/components/Header/Header'
import { Head } from '@/core/components/Head/Head'
import { FeaturedImage } from '@/core/components/FeaturedImage/FeaturedImage'
import { Features } from '@/core/components/Features/Features'
import { Speakers } from '@/core/components/Speakers/Speakers'
import { Talks } from '@/features/talks/ui/Talks'
import { EventInfo } from '@/core/components/EventInfo/EventInfo'
import React from 'react'

export default function Home() {
    return (
        <>
            <div className="App">
                <Header />
                <Head title="Inicio" description="Primer evento TALKS en Granada" />
                <FeaturedImage />
                <Features />
                <Speakers />
                <Talks />
                <EventInfo />
                <Footer />
            </div>
        </>
    )
}
