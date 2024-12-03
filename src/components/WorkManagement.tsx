import Image from 'next/image'
import workTogether from "@/app/assets/Work Together Image.png"

function WorkManagement() {
  return (
    <div className='work-management w-[1920px] h-[1588px] px-[220px] py-[140px] flex flex-col gap-[100px] bg-white'>
        <div className="content h-[547px] w-[1480px] flex gap-[60px] ">
            <div className="heading h-[411px] w-[672px] flex flex-col gap-[60px] ">
                <h1 className='w-full h-[174px] font-bold text-7xl leading-[87.14px] text-[#212529]'>
                    Project Management
                </h1>
                <p className='w-full h-[90px] font-normal text-lg leading-[30px] text-[#212529] '>
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                </p>

                <button className='w-[201px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] hover:bg-[#4FaDFF] text-white '>
                    Get Started &gt;
                </button>
            </div>

            <div className="image-container bg-[#C4DEFD] w-[748px] h-[547px] "></div>

        </div>

        <div className="content-2 w-[1480px] h-[661px] flex items-center gap-[100px]">
            <div className="left-div w-[710px] h-full pl-[35px] ">
                    <Image
                        src={workTogether}
                        alt='work-together'
                        height={661}
                        width={661}
                    />
            </div>

            <div className="heading w-[670px] h-[294px] flex flex-col gap-[60px] items-center ">
                <h1 className='w-full h-[87px] font-bold text-7xl leading-[87.14px] text-[#212529] text-center '>
                    Work together
                </h1>
                <p className='w-full h-[60px] font-normal text-lg leading-[30px] text-[#212529] text-center '>
                With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
                </p>

                <button className='w-[186px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] hover:bg-[#4FaDFF]'>
                    Try it now &gt;
                </button>

            </div>

        </div>
      
    </div>
  )
}

export default WorkManagement
