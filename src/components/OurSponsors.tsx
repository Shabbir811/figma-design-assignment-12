import Image from "next/image"

import apple from "@/app/assets/Apple.png"
import microsoft from "@/app/assets/microsoft 1.png"
import slack from "@/app/assets/Slack_Technologies_Logo 1.png"
import google from "@/app/assets/Google.png"

function OurSponsors() {
  return (
    <div className='sponsor   py-[140px] bg-white flex flex-col gap-[100px]'>
        <h1 className='wraper font-bold text-7xl leading-[87.14px]  text-[#212529] text-center '>
        
            Our sponsors 
        </h1>

        <div className="sponsor-images wraper flex-grow justify-center items-center sm:flex-row sm:justify-between flex-wrap flex-col flex gap-[45px] ">
            <Image
                src={apple}
                alt="apple"
                width={55.47}
                height={68}

            />
            <Image
                src={microsoft}
                alt="microdoft"
                width={287}
                height={62}

            />
            <Image
                src={slack}
                alt="slack"
                width={280}
                height={71}

            />
            <Image
                src={google}
                alt="google"
                width={211}
                height={69.81}

            />

        </div>
      
    </div>
  )
}

export default OurSponsors
