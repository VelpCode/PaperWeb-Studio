import React from 'react'
import Image from 'next/image'

const offer = () => {
  return (
    <div className = "flex justify-center items-center flex-col">
         <div className="offer items-center flex flex-col justify-center">
          <div className="h1 text-5xl font-bold">What we offer</div>
          <p className=" text-neutral-500 mt-4 text-xl">Browse from curated illustrations to templates & more..</p>
         </div>
        <div className="subsection items-center flex justify-center grid grid-cols-3 gap-10 p-10 max-w-[1200px ]">
          <div className="box p-10 rounded-lg shadow-sm bg-white border shadow-sm mb-20 cursor-pointer hover:scale-105 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="imagesec items-center flex justify-center align-middle mb-5 max-h-[700px]">
            <Image src = '/template.png' alt = 'Custom Work'  width={200} height={10}/>
            </div>            <div className="h1 font-bold">Web Skins</div>
            <div className="body text-sm mt-4 text-neutral-500">Check out differet aesthetic website templates that you will fall in love with, both code & nocode. </div>
            <button className="bg-[#222222] p-2 shadow-md mt-5 text-sm rounded-lg h-full w-full text-white">Browse</button>
          </div>
          <div className="p-10 box rounded-lg shadow-sm bg-white border mb-20 items-center cursor-pointer hover:scale-105 hover:shadow-md transition-transform duration-300 ease-in-out">
            <div className="imagesec items-center flex justify-center align-middle mb-5">
            <Image src = '/illustration.png' alt = 'Custom Work'  width={180} height={10}/>
            </div>
            <div className="h1 font-bold text-lg">Illustration Packs</div>
            <div className="body text-sm mt-4 text-neutral-500">Browse from a collection of various illustrations styles you can throw on your sites.</div>
            <button className="bg-[#222222] p-2 shadow-md mt-5 text-sm rounded-lg h-full w-full text-white">Browse</button>
          </div>
          <div className="box p-10 rounded-lg shadow-sm border bg-red-40 mb-20 cursor-pointer hover:scale-105 hover:shadow-md transition-transform duration-300 ease-in-out">
          <div className="imagesec items-center flex justify-center align-middle mb-5">
            <Image src = '/custom.png' alt = 'Custom Work'  width={300} height={10}/>
            </div>
            <div className="h1 font-bold text-lg">Custom Work</div>
            <div className="body text-sm mt-4 text-neutral-500">Let's have a chat about what work you want done regarding your brand, website or designs.</div>
            <button className="bg-[#222222] p-2 shadow-md mt-5 text-sm rounded-lg h-full w-full text-white">Find out more</button>
          </div>
        </div>
        </div>
  )
}

export default offer