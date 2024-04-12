import React from 'react'
import Image from 'next/image'

const subdesc = () => {
  return (
    <div className = "flex justify-center items-center min-h-[500px]">
        <div className="container mb-[200px] justify-center">
            <div className="boxes grid grid-cols-3 items-center align-middle gap-[100px]">
                <div className="box max-w-[300px] flex flex-col items-center align-middle">
                        <Image className = "mb-10" src = "/brandimage.png" alt = "Branding" width={150} height={150}/>
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Branding</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
                <div className="box max-w-[300px] flex flex-col items-center align-middle">
                        <Image className = "mb-10" src = "/yoursite.png" alt = "Branding" width={150} height={150}/>
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Website Design</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
                <div className="box max-w-[300px] flex flex-col items-center align-middle">
                        <Image className = "mb-10" src = "/writing.png" alt = "Branding" width={150} height={150}/>
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Writing</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
            <div className="relative mt-10">
    <div className="absolute -inset-5">
        <div
            className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
        </div>
    </div>
    <button
        className=" inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
        Let's talk about your site
    </button>
</div>
        </div>
        </div>
    </div>
    
  )
}

export default subdesc