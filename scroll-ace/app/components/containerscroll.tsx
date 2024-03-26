"use client";
import Image from "next/image";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Claydo from "../../public/ccclaymoji.png"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#222222]">
              Bring your boring websites to life with <br />
            </h1>
            <h1>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Paper<span className="t text-red-300">Web</span><Image src={Claydo} alt="Claymoji PNG Image" width={100} height={100} />

              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Landing Page Illustration",
    designation: "Sample Landing Page illustration",
    image: "https://i.ibb.co/Ctn361D/1.png",
    badge: "View",
  },
  {
    name: "Art Splash Creative",
    designation: "Divsplash Creative Platform",
    image: "https://i.ibb.co/m6X22Nv/Divsplash.png",
    badge: "View",
  },
  {
    name: "Notion Mockup",
    designation: "Software Engineer, Tech Corp",
    image: "https://i.ibb.co/PWwVJHc/3.jpg",
    badge: "View",
  },
  {
    name: "Social Media Product Design",
    designation: "Product Manager, Innovate Inc",
    image: "https://i.ibb.co/Gt7qSKZ/VELPSPLSAH.png",
    badge: "View",
  },
  {
    name: "Doodle Marketting Page",
    designation: "Marketting page with ilustrations",
    image: "https://i.ibb.co/BfCYSYN/frame2.png",
    badge: "View",
  },
  {
    name: "Illustration Portfolio",
    designation: "Portfolio illustrations displayed",
    image: "https://i.ibb.co/8YmH6T1/winplante.png",
    badge: "View",
  },

];
