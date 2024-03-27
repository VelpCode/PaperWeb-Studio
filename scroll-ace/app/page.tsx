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
        <div>
         <div className="offer items-center flex flex-col justify-center">
          <div className="h1 text-5xl font-bold">What we offer</div>
          <p className=" text-neutral-500 mt-4 text-xl">Browse from curated illustrations to templates & more..</p>
         </div>
        <div className="subsection items-center flex justify-center grid grid-cols-3 gap-10 p-10">
          <div className="box p-10 border rounded-lg shadow-lg bg-[#ECF2F2] mb-20">
            <div className="h1 font-bold">Web Skins</div>
            <div className="body text-sm mt-5">Creating</div>
          </div>
          <div className="box p-10 border rounded-lg shadow-lg bg-[#ECF2F2] mb-20">
            <div className="h1 font-bold">Web Skins</div>
            <div className="body text-sm mt-5">Creating</div>
          </div>
          <div className="box p-10 border rounded-lg shadow-lg bg-[#ECF2F2] mb-20">
            <div className="h1 font-bold">Web Skins</div>
            <div className="body text-sm mt-5">Creating</div>
          </div>
        </div>
        </div>
    </div>
  );
}
