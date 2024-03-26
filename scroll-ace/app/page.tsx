import Image from "next/image";
import { HeroScrollDemo } from "./components/containerscroll";
import { HeroParallaxDemo } from "./components/parallax";

export default function Home() {
  return (

    
    <div>
        <HeroScrollDemo />
        <HeroParallaxDemo />
        <div className="subsection items-center flex justify-center">
          <h1 className="text-5xl font-semibold text-black dark:text-black"> Check out some work </h1>

        </div>
    </div>
  );
}
