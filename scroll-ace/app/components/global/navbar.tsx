import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const navbar = () => {
  return (
    <header className = "fixed right-0 left-0 top-0 py-4 px-4 bg-white backdrop-blur-md flex items-center border-b[1px] border-neutral-900 justify-between">
      <aside className='flex items-center gap-[2px]'>
        <p className='text-lg font-semibold text-gray-500'>paperweb</p>
        <Image 
          src='/ccclaymoji.png'
          alt='Claymoji PNG Image'
          width={40}
          height={40}
        />
      </aside>
      <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
        <ul className='flex items-center gap-4 list-none'>
          <li>
            <Link href = '/'>Templates</Link>
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
    </header>
  )
}

export default navbar