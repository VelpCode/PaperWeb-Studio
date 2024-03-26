import Image from "next/image";
import { HeroScrollDemo } from "./components/containerscroll";
import { HeroParallaxDemo } from "./components/parallax";
import PaperWeb from "../public/ccclaymoji.svg"

export default function Home() {
  return (

    
    <div>
        <HeroScrollDemo />
        <HeroParallaxDemo />
        <div className="subsection items-center flex justify-center">

        </div>
    </div>
  );
}
