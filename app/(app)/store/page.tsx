import FilterCard from '@/app/components/utils/filterCard'
import MaxWidthContainer from '@/app/components/utils/maxWidthContainer'
import ProductCard from '@/app/components/utils/productCard'
import SectionHeader from '@/app/components/utils/sectionHeader'
import SwitchCard from '@/app/components/utils/switchCard'
const filterItems=[
  {
    title:"All Items",
    active:true
  },
  {
    title:"Clothing",
    active:false
  },
  {
    title:"Accessories",
    active:false
  },
  {
    title:"Books",
    active:false
  },
  {
    title:"Gadgets",
    active:false
  },
  {
    title:"Food Stuffs",
    active:false
  },
]
export default function Page() {
  return (
    <MaxWidthContainer>
      <div className="w-full mt-10 py-25 bg-foreground border border-gray-100 rounded-3xl">

        <SectionHeader
            title='Bingham’s University biggest Student Market'
            body='Discover to buy, sell and rent anything on campus with ease.'
            buttonValue='Add your Stuff'
            buttonAction='/store'
        />
      </div>
      <div className='w-full py-25 gap-5 flex flex-col'>
            <div className='w-full flex gap-5 flex-row'>
                <div className="flex-1 overflow-hidden ">
                    <div className="w-fit flex flex-row gap-4">
                        {filterItems.map(item=>(
                            <FilterCard
                                title={item.title}
                                active={item.active}
                            />
                        ))}
                    </div>
                </div>
                <div className='w-fit'>
                    <SwitchCard/>
                </div>
            </div>
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
