//  'use client'
// import React, { useEffect, useState } from 'react'
// import Container from '../components/Container';
// import Link from 'next/link';

// export default function page() {
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("");
//   const [products, setProducts] = useState([]);

//   useEffect(()=>{
//     fetch('https://dummyjson.com/products/categories')
//     .then((res)=>res.json())
//     .then(data => setCategories(data))
//   }, [])
//   useEffect(()=>{
//     if(activeCategory){
//       fetch(`https://dummyjson.com/products/category/${activeCategory}`)
//       .then((res)=> res.json())
//       .then(data =>setProducts(data.products))
//     }
//   },[activeCategory])
//   return (
//     <div className='py-[50px]'>
//       <Container>
//         <div className='flex'>
//           <div>
//             <h1 className='font-bold text-[30px]'>All Category</h1>
//             <div>
//               {
//                 categories.map((category, index) => (
//                   <p onClick={()=>setActiveCategory(category)}
//                   className='font-medium text-[18px] py-1' key={index}>{category}</p>
//                 ))
//               }
//             </div>
//           </div>
//           <div>
//               {
//                 products.map((product, id)=>(
//                   <div key={product.id}>
//                         <div className='w-[300px] bg-gray-300 p-5 my-5 rounded flex items-center justify-center'>
//                             <Image src={product.thumbnail} width={200} height={200}
//                             alt={product.title || "Product image"} 
//                             />
//                         </div>
//                         <h1 className='text-[17px] font-medium'>{product.title}</h1>
//                         <h1 className='text-[17px] font-medium text-black/60'>{product.price}</h1>
//                         <Link href ='/SingleProduct'>Details</Link>
//                     </div>
//                 ))
//               }
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }
