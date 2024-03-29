import React from 'react'
import Image from 'next/image'

const subdesc = () => {
  return (
    <div className = "flex justify-center items-center min-h-[500px]">
        <div className="container mb-[200px] flex justify-center">
            <div className="boxes grid grid-cols-3 items-center align-middle gap-[100px]">
                <div className="box max-w-[300px] flex flex-col items-center align-middle">
                        <Image className = "mb-10" src = "/ccclaymoji.png" alt = "Branding" width={100} height={100}/>
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Branding</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
                <div className="box max-w-[300px] flex flex-col items-center align-middle">
                        <Image className = "mb-10" src = "/ccclaymoji.png" alt = "Branding" width={100} height={100}/>
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Website Design</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
                <div className="box max-w-[300px] flex flex-col items-center align-middle ">
                        <Image className = "mb-10" src = "/ccclaymoji.png" alt = "Branding" width={100} height={100}/>
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Writing</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default subdesc