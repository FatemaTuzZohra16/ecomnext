'use client'
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { useAppDispatch } from '../lib/hooks'
import { addToCart } from '../lib/slice/cartSlice'

export default function ProductPage() {
    const dispatch = useAppDispatch()
     const [productData, setProductData] = useState([])
     const [categories, setCategories] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          const data = await fetch('https://dummyjson.com/products')
          const products = await data.json()
          setProductData(products.products)
        }
        fetchData()
      }, [])
      useEffect(() => {
        const fetchData = async () => {
          const caterorisData = await fetch('https://dummyjson.com/products/categories')
          const categories = await caterorisData.json()
          setCategories(categories)
        }
        fetchData()
      }, [])
    const handleAddToCart= (product)=>{
        console.log("aney you can win just trust in Allah", product);
        dispatch(addToCart(product))
    }
    return (
        <div>
            <Container>
                <div className='flex justify-between py-[60px]'>
                    <div className='w-[30%]'>
                        <h2 className='font-bold text-[30px] mb-[35px]'>Category List</h2>
                        <div>
                        {
                            categories.map((category , index) =>(
                                <p key={index} className='font-medium text-[18px] py-1'>{category.name}</p>
                            ))
                        }
                        </div>
                    </div>
                    <div className='w-[70%]'>
                        <div>
                            <h2 className='font-bold text-center text-[30px] mb-[35px]'>Product List</h2>
                        </div>
                        <div className='flex flex-wrap justify-between'>
                            {
                                productData.map((product, id) => (
                                    <div key={product.id}>
                                        <div className='w-[300px] bg-gray-300 p-5 my-5 rounded flex items-center justify-center'>
                                            <Image src={product.thumbnail} width={200} height={200} />
                                        </div>
                                        <h1 className='w-[280px] text-[17px] font-medium'>{product.title}</h1>
                                        <h1 className='text-[17px] font-medium text-black/60'>{product.price}</h1>
                                        <div className='flex gap-x-[10px] mt-3'>
                                            <Link className='bg-emerald-800 text-white py-1 px-3 rounded' href={`product/${product.id}`}>Details</Link>
                                            <Link onClick={()=>handleAddToCart(product)}  className='bg-emerald-800 text-white py-1 px-3 rounded' href='/cart'>Add To Cart</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
