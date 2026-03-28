import Button from "@/app/components/utils/button";
import FilterCard from "@/app/components/utils/filterCard";
import MaxWidthContainer from "@/app/components/utils/maxWidthContainer";
import ProductCard from "@/app/components/utils/productCard";
import category from "@/app/assets/images/category-2.svg";
import SwitchCard from "@/app/components/utils/switchCard";
import Image from "next/image";
const filterItems = [
  {
    title: "All Items",
    active: true,
  },
  {
    title: "Clothing",
    active: false,
  },
  {
    title: "Accessories",
    active: false,
  },
  {
    title: "Books",
    active: false,
  },
  {
    title: "Gadgets",
    active: false,
  },
  {
    title: "Food Stuffs",
    active: false,
  },
];
export default function Page() {
  return (
    <MaxWidthContainer>
      <div className="pt-18.75 w-full flex flex-col">
        <div className="w-full mt-10 py-25 p-5 bg-foreground border border-gray-200 rounded-3xl">
          <div className="w-full flex justify-center">
            <div className="w-full items-center justify-center max-w-150 flex flex-col gap-5">
              <div className="w-fit">
                <h2 className="text-center title-font2 text-[40px] sm:text-5xl lg:text-[65px] text-(--primary) leading-none tracking-header">
                  Bingham’s University biggest Student Market
                </h2>
              </div>
              <div className="w-full max-w-100 flex flex-col justify-center items-center gap-5">
                <p className="text-center text-lg text-(--secondary) leading-body title-font font-medium tracking-body">
                  Discover to buy, sell and rent anything on campus with ease.
                </p>

                <Button title={"Add your Stuff"} LinkTo={"/store"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-25 gap-5 flex flex-col">
          <div className="w-full flex gap-5 flex-row">
            <div className="flex-1 overflow-hidden ">
              <div className="flex lg:hidden">
                <button className="border border-gray-200 cursor-pointer rounded-full px-2 py-2 bg-(--card)">
                  <Image src={category} alt="category" className="size-6" />
                </button>
              </div>
              <div className="w-fit hidden lg:flex flex-row gap-4">
                {filterItems.map((item) => (
                  <FilterCard title={item.title} active={item.active} />
                ))}
              </div>
            </div>
            <div className="w-fit">
              <SwitchCard />
            </div>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
}
