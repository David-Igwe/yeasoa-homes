import TopNav from "../src/components/TopNav";
import Navbar from "../src/components/Navbar";
import HomeHero from "../src/components/HomeHero";
import HomeProperties from "../src/components/HomeProperties";
import PropertyFeatures from "../src/components/PropertyFeatures";
import Benefits from "../src/components/Benefits";
import OwnersInfo from "../src/components/OwnersInfo";
import { propertyFeatureList } from "../src/data/propertyFeatureList";
import { Separator } from "../src/components/ui/separator";


export default function Home() {
  return (
    <>
      <TopNav />
      <Navbar />
      <HomeHero />
      <HomeProperties />
      <Separator />
      <PropertyFeatures features={propertyFeatureList} />
      <Separator />
      <Benefits />
      <OwnersInfo />
    </>
  );
}
