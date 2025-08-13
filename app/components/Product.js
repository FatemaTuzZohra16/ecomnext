import React from 'react'
import Container from './Container'
import Image from "next/image";
import Link from 'next/link';

const Product = async() => {
     const data = await fetch('https://dummyjson.com/products')
  const products = await data.json()
  return (
    <div className='py-[60px]'>
        <Container>
            <div>
                <h2 className='font-bold text-center text-[30px] mb-[35px]'>Product List</h2>
            </div>
            <Link href ='/Category'>Category</Link>
           <div className='flex flex-wrap justify-between'>
             {
                products.products.map((product, id)=>(
                    <div key={product.id}>
                        <div className='w-[300px] bg-gray-300 p-5 my-5 rounded'>
                            <Image src={product.thumbnail} width={200} height={200}/>
                        </div>
                        <h1 className='text-[17px] font-medium'>{product.title}</h1>
                        <h1 className='text-[17px] font-medium text-black/60'>{product.price}</h1>
                        <Link href ='/SingleProduct'>Details</Link>
                    </div>
                ))
            }
           </div>
        </Container>
    </div>
  )
}

export default Product