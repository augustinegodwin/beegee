"use client"
import MaxWidthContainer from '../utils/maxWidthContainer'
import SectionHeader from '../utils/sectionHeader'
import ProductCard from '../utils/productCard'
import { useEffect } from 'react'

type pageProps = {
  products: any[]
}

export default function Store({ products }: pageProps) {
  useEffect(()=>{
    console.log(products)
  },[])
  return (
    <MaxWidthContainer>
        <div className="py-25 flex flex-col justify-center gap-25">
            <SectionHeader
                title='Bingham’s University biggest Student Market'
                body='Discover to buy, sell and rent anything on campus with ease.'
                buttonValue='View All products'
                buttonAction='/store'
            />
             <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                {products.slice(8,16).map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
             </div>
        </div>
    </MaxWidthContainer>
  )
}
