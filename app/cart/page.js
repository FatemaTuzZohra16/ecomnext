'use client'
import React from 'react'
import Container from '../components/Container'
import { useAppSelector } from '../lib/hooks'
import Link from 'next/link'

export default function CartPage() {
    const data = useAppSelector((selector)=>selector.cartDetails.value)
  return (
    <div className='py-[60px]'>
        <Container>
            <div className='flex justify-between'>
                CartPage: {data.length}
                 <Link className='bg-emerald-800 text-white py-1 px-3 rounded' href='/product'>Back</Link>
            </div>
        </Container>
    </div>
  )
}
