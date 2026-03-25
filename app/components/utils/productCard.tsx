import React from 'react'

export default function ProductCard() {
  return (
    <div className="w-full flex flex-col gap-4">
        <div className="w-full aspect-[0.882609/1] bg-(--card) rounded-2xl"></div>
        <div className="w-ful flex flex-col gap-2.5">
            <div className="w-full">
                <p className='text-semibold leading-body tracking-body text-sm text-(--primary) title-font'>Men’s Baggy Light-Wash Vintage Denim – Distressed Sand Finish</p>

            </div>
            <div className="flex w-full justify-between">
                <p className='text-semibold leading-body tracking-body text-sm title-font text-(--warning)'>Unavaliable</p>
                <p className='text-semibold leading-body tracking-body title-font text-sm text-(--primary)'>N250,000</p>
            </div>
        </div>
    </div>
  )
}
