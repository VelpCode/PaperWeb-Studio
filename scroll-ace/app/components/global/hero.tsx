import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div>
        <Button 
                size = {'lg'}
                className = "p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2  rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start for free today
                  </span>
                </Button>
    </div>
  )
}

export default Hero