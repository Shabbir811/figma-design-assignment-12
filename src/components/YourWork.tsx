import React from 'react'

function YourWork() {
  return (
    <div className='your-work wraper py-[140px] flex flex-col justify-center items-center gap-[60px] bg-[#043873] '>
      <div className="flex flex-col gap-6">
        <h1 className=' text-white font-bold text-7xl leading-[87.14px] '>
          Your work, everywhere you are
        </h1>
        <p className='font-normal text-white text-lg leading-[30px] align-middle '>
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
      </div>
      <button className='rounded-lg px-10 py-5 bg-[#4F9CF9] hover:bg-[#4FaDFF]'>
        Try Taskey &gt;
      </button>

    </div>
  )
}

export default YourWork
