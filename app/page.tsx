import Image from "next/image";
import { Shrikhand } from "next/font/google";
import Hero from "./Components/Hero";
import './home.css'

const shrikHand = Shrikhand({ 
  subsets: ['latin'],
  weight: '400'
 })

export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
      </main>
    </>
  );
}
