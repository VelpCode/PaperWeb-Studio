import Image from "next/image";
import { HeroScrollDemo } from "./components/containerscroll";
import { HeroParallaxDemo } from "./components/parallax";
import Clayimage from '../public/ccclaymoji.png'
import Navbar from "./components/global/navbar";
import Paper from '../public/paper.png'

export default function Home() {
  return (

    
    <div>
        <Navbar />
        <Image 
          src='/paper.png'
          alt='Paper Png'
          width={50}
          height={50}
        />
        <HeroScrollDemo />
        <HeroParallaxDemo />
        <div className="subsection items-center flex justify-center">
        </div>
    </div>
  );
}
