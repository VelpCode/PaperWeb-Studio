import Image from "next/image";
import { HeroScrollDemo } from "./components/containerscroll";
import { HeroParallaxDemo } from "./components/parallax";
import Clayimage from '../public/ccclaymoji.png'
import Navbar from "./components/global/navbar";
import Offer from "./components/global/offer";
import Paper from '../public/paper.png'
import Background from '../public/background.png'
import { ThreeDCardDemo } from "./components/3dcard";
import Subdesc from "./components/global/subdesc";
import Footer from "./components/global/footer"

export default function Home() {
  return (

    
    <div>

        <Image src = '/backgroundfour.png' alt = 'Background Image' layout = 'fill' objectFit = 'cover' />
        <Navbar />
        <HeroScrollDemo>
        </HeroScrollDemo>
        <HeroParallaxDemo />
        <Subdesc />
        <Offer />
        <Footer/>
        
    </div>
  );
}
