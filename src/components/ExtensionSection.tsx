

function ExtensionSection() {
    return (<>
        <div className="extention1 wraper py-[140px] flex flex-col lg:flex-row items-center gap-[98px] bg-[#043873]">
            <div className="heading lg:w-1/2 flex-grow flex flex-col gap-[60px] ">
                <h1 className="font-bold text-7xl leading-[87.14px] text-white">
                    Use as Extension
                </h1>
                <p className="font-normal text-lg leading-[30px] text-white  ">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                </p>

                <button className="w-[171px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] hover:bg-[#4FaDFF]">
                    Let’s Go &gt;
                </button>

            </div>

            <div className="image-container  h-[479px] flex-grow lg:w-1/2 bg-[#C4DEFD]">

            </div>

        </div>

        <div className="extention2 wraper py-[140px] flex flex-col lg:flex-row items-center gap-[98px] bg-white">
            <div className="image-container  h-[532.09px] flex-grow lg:w-1/2 bg-[#C4DEFD]"></div>
            <div className="heading lg:w-1/2 flex-grow flex flex-col gap-[60px] ">
                <h1 className="font-bold text-7xl leading-[87.14px] text-[#212529]">
                    Customise it to your needs
                </h1>
                <p className="font-normal text-lg leading-[30px]  text-[#212529]">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                </p>

                <button className="w-[171px] h-[63px] rounded-lg px-10 py-5 bg-[#4F9CF9] hover:bg-[#4FaDFF]">
                    Let’s Go &gt;
                </button>

            </div>


        </div>
    </>)
}

export default ExtensionSection
