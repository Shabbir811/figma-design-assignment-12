import Image from 'next/image'
import workTogether from "@/app/assets/Work Together Image.png"

function WorkManagement() {
  return (
    <div className='work-management py-[140px] flex flex-col gap-[100px] bg-white'>
        <div className="content wraper flex gap-[60px]  flex-col lg:flex-row  justify-center ">
            <div className="heading  lg:w-1/2 flex flex-grow flex-col gap-[60px] ">
                <h1 className='font-bold text-7xl leading-[87.14px] text-[#212529]'>
                    Project Management
                </h1>
                <p className='font-normal text-lg leading-[30px] text-[#212529] '>
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                </p>

                <button className='w-[201px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] hover:bg-[#4FaDFF] text-white '>
                    Get Started &gt;
                </button>
            </div>

            <div className="image-container bg-[#C4DEFD] lg:w-1/2 flex-grow h-[547px] "></div>

        </div>

        <div className="content-2 wraper flex flex-col lg:flex-row items-center justify-center gap-[100px]">
            <div className="left-div lg:w-1/2 flex-grow h-full relative ">
                    <Image
                        src={workTogether}
                        alt='work-together'
                        
                    />
            </div>

            <div className="heading lg:w-1/2 flex flex-col gap-[60px] items-center ">
                <h1 className=' font-bold text-7xl leading-[87.14px] text-[#212529] text-center '>
                    Work together
                </h1>
                <p className='font-normal text-lg leading-[30px] text-[#212529] text-center '>
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
