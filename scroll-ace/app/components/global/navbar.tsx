import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const navbar = () => {
  return (
    <header className = "fixed right-0 left-0 top-0 py-4 z-10 px-4 bg-solid backdrop-blur-md flex items-center border-b border-neutral-200 justify-between">
      <Link href = "/">
      <aside className='flex items-center gap-[2px]'>
        <p className='text-lg font-semibold text-gray-500 cursor-pointer'>paperweb</p>
        <Image 
          src='/ccclaymoji.png'
          alt='Claymoji PNG Image'
          width={40}
          height={40}
        />
      </aside>
      </Link>
      <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
        <ul className='flex items-center gap-4 list-none text-neutral-700 text-sm'>
          <li>
            <Link href = '/templates'>Templates</Link>
          </li>
          <li>
            <Link href = '/about'>Resources</Link>
          </li>
          <li>
            <Link href = '/services'>Illustrations</Link>
          </li>
          <li>
            <Link href = '/contact'>Services</Link>
          </li>
          <li>
            <Link href = '/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <aside className='flex items-center gap-4'>
      <button className="shadow-[0_4px_14px_0_rgba(205,120,180,0.39)] hover:shadow-[0_6px_20px_rgba(255,105,180,0.23)] hover:bg-black-200 px-8 py-2 bg-black rounded-md text-white font-light transition duration-200 ease-linear">
  Book a call
</button>
      </aside>
    </header>
  )
}

export default navbar