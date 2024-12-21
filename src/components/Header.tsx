import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/Logo.png"
function Header() {
  return (
    <header className="h-[92px] wraper py-4 flex justify-between items-center bg-[#043873] ">
        <div className="logo relative w-[191px] h-[34px]">
            <Image
                src={logo}
                alt="logo"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
        </div>
        <nav className="h-[60px] link text-white flex justify-center items-center gap-[60px]">
            <div className="nav-links  hidden  lg:flex gap-8">
                <Link 
                    href={"#!"}
                >
                    Products
                </Link>
                <Link 
                    href={"#!"}
                >
                    Solutions
                </Link>
                <Link 
                    href={"#!"}
                >
                    Resources
                </Link>
                <Link 
                    href={"#!"}
                >
                    Pricing
                </Link>

            </div>
            <button className="h-full w-[126px] rounded-lg  bg-[#FFE492] hover:bg-[#FFF499] text-[#043873]">
                login
            </button>
        </nav>
      
    </header>
  )
}

export default Header
