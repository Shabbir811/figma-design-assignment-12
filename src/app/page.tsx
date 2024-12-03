import ExtensionSection from "@/components/ExtensionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurSponsors from "@/components/OurSponsors";
import WorkManagement from "@/components/WorkManagement";
import YourWork from "@/components/YourWork";


export default function Home() {
  return (
    <div className="w-[1920px] ">
      <Header/>
      <HeroSection/>
      <WorkManagement/>
      <ExtensionSection/>
      <YourWork/>
      <OurSponsors/>
      <Footer/>
    </div>
  );
}
