import Image from "next/image";
import { HeroScrollDemo } from "./components/containerscroll";
import { HeroParallaxDemo } from "./components/parallax";
import Clayimage from '../public/ccclaymoji.png'

export default function Home() {
  return (

    
    <div>
        <HeroScrollDemo />
        <HeroParallaxDemo />
        <div className="subsection items-center flex justify-center">
        <Image src={Clayimage} alt="Claymoji PNG Image" width={100} height={100} />
        </div>
    </div>
  );
}
