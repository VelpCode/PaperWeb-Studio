import React from 'react'

const subdesc = () => {
  return (
    <div>
        <div className="container mb-[200px] flex justify-around">
            <div className="boxes grid grid-cols-3 items-center align-middle gap-[100px]">
                <div className="box max-w-[300px] flex flex-col items-center align-middle ">
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Branding</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
                <div className="box max-w-[300px] flex flex-col items-center align-middle">
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Website Design</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
                <div className="box max-w-[300px] flex flex-col items-center align-middle ">
                        <h1 className='text-3xl font-semibold text-neutral-900 items-center mb-3'>Writing</h1>
                        <p className='items-center align-middle text-center text-neutral-500'>Creating your brand-identity, making it stick out with clean designs & illustrations.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default subdesc