import MaxWidthContainer from "@/app/components/utils/maxWidthContainer";
import bot from "@/app/assets/images/bot.png";
import Image from "next/image";
import Input from "@/app/components/utils/input";
import FilterCard from "@/app/components/utils/filterCard";

export default function Page() {
  return (
    <MaxWidthContainer>
      <div className="w-full py-25 ">
        <div className="w-full flex justify-start">
          <div className="w-full items-start justify-start flex flex-col gap-5">
            
            <div className="flex w-full flex-row gap-25">
              <div className="w-50 hidden lg:flex flex-col gap-4">
                <div className="w-full">
              <h2 className="text-left title-font font-bold text-5xl lg:text-[54px] text-(--primary) leading-none tracking-header">
                Account
              </h2>
            </div>
                <FilterCard
                  active={true}
                  title="General Settings"
                />
                <FilterCard
                  active={false}
                  title="Wallet"
                />
                <FilterCard
                  active={false}
                  title="Products"
                />
                <FilterCard
                  active={false}
                  title="Orders"
                />
                <FilterCard
                  active={false}
                  title="Additional Settings"
                />
              </div>
              <div className="flex-1 bg-(--card) rounded-[30px] h-auto border border-gray-100 p-1.5">
              <div className="w-full p-5 bg-[#fcfcfc] border border-gray-100 rounded-3xl flex flex-col gap-10">
                <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                      Profile Image
                    </h2>
                    <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                      This will be displayed on your product listing.
                    </p>
                  </div>
                  <div className="size-20 rounded-full border border-gray-100">
                            <Image
                                className="size-full"
                                alt="logo"
                                src={bot}
                            />
                        </div>
                </section>
                <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                      Account Name
                    </h2>
                    <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                      This will be displayed on your product listing.
                    </p>
                  </div>
                  <div>
                    <Input type="text" placeholder="Augustine Godwin" />
                  </div>
                </section>
                <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                      Email Address
                    </h2>
                    <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                      This will be displayed on your product listing.
                    </p>
                  </div>
                  <div>
                    <Input type="text" placeholder="augustinegodwin312@gmail.com" />
                  </div>
                </section>
                <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                      Phone Number
                    </h2>
                    <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                      This will be displayed on your product listing.
                    </p>
                  </div>
                  <div>
                    <Input type="text" placeholder="09032457431" />
                  </div>
                </section>
                <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                      Password
                    </h2>
                    <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                      This will be displayed on your product listing.
                    </p>
                  </div>
                  <div>
                    <Input type="text" placeholder="*************" />
                  </div>
                </section>
                <div className="flex gap-5">
                  <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                      Level
                    </h2>
                    <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                      This will be displayed on your product listing.
                    </p>
                  </div>
                  <div>
                    <Input type="text" placeholder="100-600 Level" />
                  </div>
                </section>
                <section className="w-full grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <h2 className="text-lg tracking-body text-(--primary) font-medium title-font">
                      Matric Number
                    </h2>
                    <p className="text-sm tracking-body text-(--secondary) font-medium title-font">
                      This will be displayed on your product listing.
                    </p>
                  </div>
                  <div>
                    <Input type="text" placeholder="12356789" />
                  </div>
                </section>
                </div>
                
                
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
}
