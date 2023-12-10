import Image from 'next/image'
import Pitch from '../Pitch.png'
import React from 'react'

const BgImage = () => {
    return (
        <Image
            src={Pitch}
            style={{
                objectFit: 'cover',
                zIndex: '-1',
            }}
            alt='bg' />
    )
}

export default BgImage