import Image from 'next/image'
import React from 'react'
import '@/app/home.css'

export default function Hero() {

  

  return (
    <>
        <main className="main h-screen">
            <div className="flex center h-full">
            <h1 className="shrikhand text-white text-5xl w-1/2">Satisfy your fleshy desires <br /> <button>Explore</button></h1>
            <div className="right relative overflow-hidden h-1/2 w-1/2 shadow-inner">
                <Image src={'/sliced fish.jpg'} alt='Satisfy your fleshy cravings' fill={true} />
                <h1 className="h-96 w-full bg-gradient-radial">Image</h1>
            </div>
            </div>
        </main>
    </>
  )
}
