import Image from "next/image";
import { HeroScrollDemo } from "./components/containerscroll";
import { HeroParallaxDemo } from "./components/parallax";
import Clayimage from '../public/ccclaymoji.png'
import Navbar from "./components/global/navbar";

export default function Home() {
  return (

    
    <div>
        <Navbar />
        <HeroScrollDemo />
        <HeroParallaxDemo />
        <div className="subsection items-center flex justify-center">
        </div>
    </div>
  );
}
