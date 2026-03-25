import React from 'react'
import SectionHeader from '../utils/sectionHeader'

export default function Hero() {
  return (
    <div className="w-full h-screen max-h-250 px-5 min-h-150 bg-foreground border-b border-gray-100 flex justify-center items-center">
        <SectionHeader
            title='Join Bigham’s Largest Marketplace'
            body='Select a category to find textbooks, electronics, fashion, and more from your fellow students'
            buttonAction='/store'
            buttonValue='Explore Products'
        />
    </div>
  )
}
