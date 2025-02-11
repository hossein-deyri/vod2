import HeroSection from "@/app/(home)/_components/heroSection/HeroSection";
import MainOfferings from "./_components/mainOfferings/MainOfferings";
import SmartServices from "@/app/(home)/_components/smartServices/SmartServices";
import Faq from "@/app/(home)/_components/faq/Faq";
import PacakgesSection from "./_components/packagesSection";
import FastAccessibilities from "./_components/fastAccessibilities/FastAccessibilities";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainOfferings />
      <FastAccessibilities />
      <PacakgesSection />
      <SmartServices />
      <Faq />
    </>
  );
}
