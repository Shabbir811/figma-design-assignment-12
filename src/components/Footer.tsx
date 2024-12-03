import Image from "next/image"

import whitespace from "@/app/assets/Logo.png"
import Link from "next/link"
function Footer() {
  return (
    <div className='footer w-[1920px] h-[461px] px-[220px] pt-[140px] pb-8 bg-[#043873] '>
        <div className="content w-[1480px] h-[289px] flex flex-col justify-between ">
            <div className="info1 w-full h-[169px] flex gap-[100px]">
                <div className="description w-[295px] h-full flex flex-col gap-[15px]">
                    <Image
                        src={whitespace}
                        alt="logo"
                        height={34}
                        width={191}
                    />
                    <p className="w-[240px] h-[120px] font-normal text-lg leading-[30px] ">
                        whitepace was created for the new ways we live and work. We make a better workspace around the world
                    </p>
                </div>

                <div className="info1.2 w-[295px] h-[127px] flex flex-col gap-[15px] ">
                    <h4 className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] text-white">
                        Product
                    </h4>

                    <Link 
                        href="#!"
                        className="w-[70px] h-[20px] font-normal text-[16px] leading-5 text-white hover:text-[#FFE492]"
                    >
                      Overview  
                    </Link>

                    <Link 
                        href="#!"
                        className="w-[50px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Pricing
                    </Link>

                    <Link 
                        href="#!"
                        className="w-[177px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                    Customer stories
                    </Link>
                </div>

                <div className="info1.3 w-[295px] h-[130px] flex flex-col gap-4">
                    <h4 className="w-[91px] h-[22px] font-bold text-lg leading-[21.78px] text-white  hover:text-[#FFE492]">
                        Resources
                    </h4>

                    <Link 
                        href="#!"
                        className="w-[33px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                    Blog 
                    </Link>

                    <Link 
                        href="#!"
                        className="w-[128px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Guides & tutorials
                    </Link>

                    <Link 
                        href="#!"
                        className="w-[130px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Help center
                    </Link>
                </div>

                <div className="info1.4 w-[295px] h-[130px] flex flex-col gap-4">
                    <h4 className="w-[83px] h-[22px] font-bold text-lg leading-[21.78px] text-white">
                        Company
                    </h4>

                    <Link 
                        href="#!"
                        className="w-[66px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     About us
                    </Link>

                    <Link 
                        href="#!"
                        className="w-[62px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     Careers
                    </Link>

                    <Link 
                        href="#!"
                        className="w-[99px] h-[20px] font-normal text-[16px] leading-5 text-white  hover:text-[#FFE492]"
                    >
                     
                    </Link>
                </div>

            </div>
                <div className="line w-[1480px] h-0 border border-[#2E4E73]"></div>
            <div className="info2 w-full h-5 flex flex-col gap-1 items-center text-white">
                <p className="w-full h-5 font-normal text-[20px] leading-5 flex justify-center">
                    ©2021 Whitepace LLC.
                </p>

            </div>

        </div>
        
    </div>
  )
}

export default Footer
