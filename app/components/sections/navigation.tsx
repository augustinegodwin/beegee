import Image from "next/image";
import Link from "next/link";
import bot from "../../assets/images/bot.png";
import user from "../../assets/images/user.jpg";
import Input from "../utils/input";
import userSvg from "../../assets/images/user.svg"
import search from "../../assets/images/search.svg"

export default function Navigation() {
  return (
    <div className="w-full flex fixed  justify-center px-4 sm:px-5 py-4 items-center">
      <div className="w-full  max-w-150 lg:max-w-300 ">
        <div className="flex justify-between">
          <Link href={"/"} className="flex gap-1 w-fit items-center">
            <Image src={bot} alt="logo" className="w-auto h-10" />
            <span className="text-3xl atwtts hidden lg:block text-black leading-[1.1] tracking-body">
              BeeGee
            </span>
          </Link>
          <div className="max-w-100 w-full hidden lg:flex flex-1 h-full">
            <Input
                placeholder="Search Products on beegee"
                type="text"
                
            />
          </div>
          <div className="flex gap-2.5 items-center">
            <div className="size-10 rounded-full bg-(--card) flex lg:hidden items-center justify-center border-gray-200 overflow-hidden border p-0.5">
                <Image src={search} alt="search" className="size-6" />
            </div>
            <div className="size-10 flex rounded-full bg-(--card) justify-center items-center border-gray-200 overflow-hidden border p-0.5">
                <Link href={"/account"}>
                    <Image src={userSvg} alt="profile" className="size-6" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
