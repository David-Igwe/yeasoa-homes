import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function HomeHero() {
  return (
    <section className="relative bg-[url(/img/property6.jpg)] bg-no-repeat bg-center bg-cover text-white w-full h-screen">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative flex flex-col h-full justify-center items-center gap-y-5">
        <header className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-3 px-8">
            Yeasoa Homes - Luxury Shortlet Apartments
          </h1>
          <p className="text-sm md:text-base">Your Home Away From Home in Lagos & Abuja</p>
        </header>

        <h2 className="font-display font-bold text-center text-lg md:text-xl px-12">Discover Unparalleled Luxury in Every Stay</h2>
        <p className="text-center text-sm md:text-base px-12 md:px-30">
          Welcome to Yeasoa Luxury Homes - where premium shortlet apartments
          redefine comfort, style, and convenience. Whether you're in Lagos for
          business, a family getaway in Abuja, or a weekend escape, our fully
          furnished, serviced properties offer the perfect blend of elegance and
          functionality.
        </p>
        <Button variant="secondary" nativeButton={false} render={<Link to='/' />}  className="w-fit p-4 md:p-5 uppercase">Book Your Luxury Stay Today!</Button>
      </div>
    </section>
  );
}
