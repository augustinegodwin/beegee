import cancel from '@/app/assets/images/cancel.svg';
import SectionHeader from "../utils/sectionHeader";
import Image from 'next/image';
import Button from '../utils/button';
import MaxWidthContainer from '../utils/maxWidthContainer';

export default function Hero() {
  return (
      <MaxWidthContainer>

    <div className="w-full h-screen max-h-250 min-h-150  pt-19 flex justify-center items-center">
      
      <div className="w-full flex justify-center bg-amber-200 rounded-3xl h-full">
            <div className="w-full items-center  justify-center max-w-150 flex flex-col gap-5">
              <div className="w-fit">
              <h2 className="text-center title-font2  text-5xl lg:text-[65px] text-(--primary) leading-none tracking-header">
                  Join Bigham’s Largest Marketplace
                </h2>
              </div>
              <div className="w-full max-w-100 flex flex-col justify-center items-center gap-5">
                <p className="text-center text-lg text-(--secondary) leading-body title-font font-medium tracking-body">
                  Select a category to find textbooks, electronics, fashion, and more from your fellow students
                </p>
                
                  <Button title={"Explore Products"} LinkTo={"/store"} />
                
              </div>
            </div>
          </div>
      {/* <div className="fixed z-10 bg-black/75 w-full h-full p-0 sm:p-10">
        <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-250 bg-(--card) sm:rounded-[30px] h-full sm:h-auto border border-gray-100 p-1.5">
        <div className="p-3 flex items-center justify-between">
        <p className="leading-body text-lg title-font track-body font-medium text-(--primary)">
        Product details
        </p>
        <div className="size-10 rounded-full bg-(--card) flex items-center justify-center border-gray-200 overflow-hidden border p-0.5">
        <Image src={cancel} alt="cancel" className="size-6" />
        </div>
              </div>
            <div className="w-full flex flex-col items-center bg-[#fcfcfc] border border-gray-200 rounded-3xl p-4">
              <div className="w-full flex flex-col sm:flex-row gap-10 ">
                <div className="w-full sm:flex-1 h-100 rounded-2xl bg-black"></div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
        </MaxWidthContainer>
  );
}
