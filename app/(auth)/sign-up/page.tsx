import AuthButton from "@/app/components/utils/authButton"
import Input from "@/app/components/utils/input"
import Image from "next/image"
import Link from "next/link"
import logo from "@/app/assets/images/bot.png"
export default function Page() {
  return (
    <div className="w-full min-h-screen py-25 px-4 flex justify-center items-center">
      <div className="w-full max-w-100 bg-(--card) rounded-[30px] h-auto border border-gray-100 p-1.5 flex-col items-center flex justify-center relative">
       
        <div className="w-full h-auto flex flex-col items-center bg-[#fcfcfc] border border-gray-100 rounded-3xl py-5">
             <div className=" size-15 rounded-full border border-gray-100 z-10 bg-white -top-7.5">
                <Image
                    className="size-full"
                    alt="logo"
                    src={logo}
                />
             </div>
            <div className="w-full flex justify-center pt-5 flex-col items-center px-5 gap-3">
                <h3 className=' title-font text-(--primary) text-2xl tracking-body leading-5'>Create your account</h3>
                <p className="leading-body text-center title-font track-body font-medium text-(--secondary)">Lets get started it is free.</p>
                <form className="w-full flex-col flex gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Full Name</label>
                        <Input
                            type="text"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Phone Number</label>
                        <Input
                            type="tel"
                            placeholder="09032457431"
                        
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-sm title-font tracking-body text-black font-medium ">Password</label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>
                    <AuthButton/>
                </form>
            </div>
        </div>
        <div className="py-3 flex justify-center">
            <p className="leading-body title-font track-body font-medium text-(--secondary)">Already have an account? <Link href={"/sign-in"} className="link-style">Sign in</Link>.</p>
        </div>
      </div>
    </div>
  )
}
