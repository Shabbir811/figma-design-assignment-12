import Image from "next/image"

import whitespace from "@/app/assets/Logo.png"
import Link from "next/link"
function Footer() {
  return (
    <div className='footer flex flex-col justify-center items-center  pt-[140px] pb-8 bg-[#043873] '>
        <div className="content wraper flex flex-col justify-center items-center gap-[100px] ">
            <div className="info1 flex gap-[100px] flex-col sm:flex-row justify-between flex-wrap ">
                <div className="description lg:w-1/4 text-center lg:text-start flex flex-col gap-[15px]">
                    <Image
                        src={whitespace}
                        alt="logo"
                        height={34}
                        width={191}
                    />
                    <p className="font-normal text-lg leading-[30px] ">
                        whitepace was created for the new ways we live and work. We make a better workspace around the world
                    </p>
                </div>

                <div className="info1.2 flex flex-col flex-grow gap-[15px] ">
                    <h4 className="font-bold text-lg leading-[21.78px] text-white">
                        Product
                    </h4>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white hover:text-[#FFE492]"
                    >
                      Overview  
                    </Link>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Pricing
                    </Link>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                    Customer stories
                    </Link>
                </div>

                <div className="info1.3 flex flex-col flex-grow gap-4">
                    <h4 className="font-bold text-lg leading-[21.78px] text-white  hover:text-[#FFE492]">
                        Resources
                    </h4>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                    Blog 
                    </Link>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Guides & tutorials
                    </Link>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Help center
                    </Link>
                </div>

                <div className="info1.4 flex flex-col flex-grow gap-4">
                    <h4 className="w-[83px] h-[22px] font-bold text-lg leading-[21.78px] text-white">
                        Company
                    </h4>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     About us
                    </Link>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Careers
                    </Link>

                    <Link 
                        href="#!"
                        className="font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     
                    </Link>
                </div>

            </div>
                <div className="line wraper h-0 border border-[#2E4E73]"></div>
            <div className="info2  h-5 flex flex-col gap-1 items-center text-white">
                <p className=" font-normal text-[20px] leading-5 flex justify-center">
                    ©2021 Whitepace LLC.
                </p>

            </div>

        </div>
        
    </div>
  )
}

export default Footer
