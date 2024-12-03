

function ExtensionSection() {
  return (<>
    <div className="extention1 w-[1920px] h-[759px] px-[220px] py-[140px] flex items-center gap-[98px] bg-[#043873]">
        <div className="heading w-[697px] h-[294px] flex flex-col gap-[60px] ">
            <h1 className="w-full  h-[87px] font-bold text-7xl leading-[87.14px] text-white">
                Use as Extension
            </h1>
            <p className="w-full h-[60px] font-normal text-lg leading-[30px] text-white  ">
                Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>

            <button className="w-[171px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] hover:bg-[#4FaDFF]">
                Let’s Go &gt;
            </button>

        </div>

        <div className="image-container  h-[479px] w-[686px] bg-[#C4DEFD]">

       </div>
      
    </div>

    <div className="extention2 w-[1920px] h-[812.09px] px-[220px] py-[140px] flex items-center gap-[98px] bg-white">
        <div className="image-container  h-[532.09px] w-[714px] bg-[#C4DEFD]">

       </div>
        <div className="heading w-[669px] h-[411px] flex flex-col gap-[60px] ">
            <h1 className="w-full  h-[174px] font-bold text-7xl leading-[87.14px] text-[#212529]">
                Customise it to your needs
            </h1>
            <p className="w-full h-[90px] font-normal text-lg leading-[30px]  text-[#212529]">
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
