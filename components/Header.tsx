import { NAV_LINKS } from '@/constants'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

function Header() {
  return (
    <nav
      className='container flex items-center justify-between py-[30px]'
    >
      <Image 
        src='/logo.png'
        alt='spanty'
        width={100}
        height={36}
      />
      <ul className='hidden gap-16 md:flex'>
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href}
            key={link.key}
            className='text-white font-medium hover:opacity-60 transition duration-200'
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden md:flex">
        <Button
          variant='btn_white'
          title={'Contact Us'}
        />
      </div>

      <Image 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer md:hidden"
      />
    </nav>
  )
}

export default Header