import React from 'react'
import image404 from '../assets/404.jpg'
import Image from 'next/image'

export const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <Image src={image404} alt="Página no encontrada" />
        </div>
    )
}
