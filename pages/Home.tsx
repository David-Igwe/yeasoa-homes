import TopNav from "../src/components/TopNav";
import Navbar from "../src/components/Navbar";
import HomeHero from "../src/components/HomeHero";
import HomeProperties from "../src/components/HomeProperties";
import PropertyFeatures from "../src/components/PropertyFeatures";
import Benefits from "../src/components/Benefits"
import { propertyFeatureList } from "../src/data/propertyFeatureList";

export default function Home() {
  return (
    <>
      <TopNav />
      <Navbar />
      <HomeHero />
      <HomeProperties />
      <hr />
      <PropertyFeatures features={propertyFeatureList} />
      <Benefits />
    </>
  );
}
