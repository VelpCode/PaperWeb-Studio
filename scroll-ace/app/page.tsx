import Image from "next/image";
import { HeroScrollDemo } from "./components/containerscroll";
import { HeroParallaxDemo } from "./components/parallax";
import Clayimage from '../public/ccclaymoji.png'
import Navbar from "./components/global/navbar";
import Paper from '../public/paper.png'
import Background from '../public/background.png'
import { ThreeDCardDemo } from "./components/3dcard";

export default function Home() {
  return (

    
    <div>
        <Image src = '/background.png' alt = 'Background Image' layout = 'fill' objectFit = 'cover' />
        <Navbar />
        <HeroScrollDemo />
        <HeroParallaxDemo />
        <div className="subsection items-center flex justify-center">
          
          <h1 className="title text-5xl"></h1>
          <ThreeDCardDemo />
        </div>
    </div>
  );
}
