import React from 'react'
import MaxWidthContainer from '../utils/maxWidthContainer'
import SectionHeader from '../utils/sectionHeader'
import ProductCard from '../utils/productCard'

export default function Store() {
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
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
             </div>
        </div>
    </MaxWidthContainer>
  )
}
