import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Logo.png"
function Header() {
  return (
    <header className="h-[92px] w-full px-[220px] py-4 flex justify-between bg-[#043873] ">
        <div className="logo">
            <Image
                src={logo}
                alt="logo"
                height={34}
                width={191}
            />
        </div>
        <nav className="h-[60px] w-[737.5px] flex gap-[60px]">
            <div className="nav-links h-[23px] w-[549px] flex gap-8">
                <Link 
                    href={"#!"}
                    className="h-[23px] w-[78px] text-white font-medium text-lg leading-[23px]"
                >
                    Products
                </Link>
                <Link 
                    href={"#!"}
                    className="h-[23px] w-[78px] text-white font-medium text-lg leading-[23px]"
                >
                    Solutions
                </Link>
                <Link 
                    href={"#!"}
                    className="h-[23px] w-[78px] text-white font-medium text-lg leading-[23px]"
                >
                    Resources
                </Link>
                <Link 
                    href={"#!"}
                    className="h-[23px] w-[78px] text-white font-medium text-lg leading-[23px]"
                >
                    Pricing
                </Link>

            </div>
            <button className="h-full w-[126px] rounded-lg px-10 py-4 bg-[#FFE492] hover:bg-[#FFF499] text-[#043873]">
                login
            </button>
        </nav>
      
    </header>
  )
}

export default Header
