import React from 'react'
import Container from './Container'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='bg-emerald-800 py-5'>
        <Container>
            <div className='flex items-center justify-between text-white'>
                <div>
                    <h1 className='text-[20px] text-white'>Ecomnext</h1>
                </div>
                <div>
                    <ul className='flex gap-x-[30px] font-bold'>
                        <Link href='/'>Home</Link>
                        <Link href='/Category'>Product</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>Contact</Link>
                    </ul>
                </div>
            </div>
        </Container>
    </nav>
  )
}
