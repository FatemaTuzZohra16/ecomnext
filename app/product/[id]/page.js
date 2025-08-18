'use client'
import Container from '@/app/components/Container'
import Product from '@/app/components/Product'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ProductDetailsPage() {
  const { id } = useParams()
  console.log(id);
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://dummyjson.com/products')
      const products = await data.json()
      setProductData(products.products)
    }
    fetchData()
  }, [])
  console.log(productData);

  const singleProduct = productData.find(Product => Product.id == id)
  console.log(singleProduct);


  return (
    <div>
      <Container>
        <div>
          <div className='flex gap-x-[30px]'>
            <div className='w-[300px] bg-gray-300 p-5 my-5 rounded flex items-center justify-center'>
            <Image src={singleProduct?.thumbnail} width={200} height={200} />
          </div>
          <div>
            {
              singleProduct?.images?.map((img) => (
                <div className='w-[150px] h-[150px] bg-gray-300 p-5 my-5 rounded'>
                  <Image src={img} width={200} height={200} />
                </div>
              ))
            }
          </div>
          </div>
          <h1 className='text-[17px] font-medium'>{singleProduct?.title}</h1>
          <h1 className='text-[17px] font-medium text-black/60'>{singleProduct?.price}</h1>
          <h1 className='text-[17px] font-medium text-black/60'>{singleProduct?.discount}</h1>
        </div>
      </Container>
    </div>
  )
}
