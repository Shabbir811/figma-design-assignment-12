

function HeroSection() {
    return (
        <div className="hero-section wraper bg-[#043873]  py-[140px] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-1 flex-wraper " >
            <div className="heading flex-grow lg:w-1/2  flex flex-col gap-[60px]">
                <h1 className=" font-bold text-white text-6xl leading-[77.45px]">
                    Get More Done with whitepace
                </h1>

                <p className=" font-normal text-lg  text-white leading-[30px]">
                    Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>

                <button className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] hover:bg-[#4FaDFF]">
                    Try Whitepace free &gt;
                </button>

            </div>

            <div className="image-container lg:w-1/2 flex-grow w-full h-[549px] bg-[#C4DEFD]">

            </div>

        </div>
    )
}

export default HeroSection
