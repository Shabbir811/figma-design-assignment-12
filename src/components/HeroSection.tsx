

function HeroSection() {
  return (
        <div className="hero-section bg-[#043873] w-full h-[829px] px-[220px] py-[140px] flex gap-1 " >
            <div className="heading h-[361px] w-[656px]  flex flex-col gap-[60px]">
                <h1 className="w-full h-[154px] font-bold text-white text-6xl leading-[77.45px]">
                    Get More Done with whitepace
                </h1>

                <p className="w-full h-[60px] font-normal text-lg  text-white leading-[30px]">
                    Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>

                <button className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] hover:bg-[#4FaDFF]">
                    Try Whitepace free &gt;
                </button>

            </div>

            <div className="image-container  h-[549px] w-[824px] bg-[#C4DEFD]">

            </div>
      
    </div>
  )
}

export default HeroSection
