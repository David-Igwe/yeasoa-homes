import TopNav from "../src/components/TopNav";
import Navbar from "../src/components/Navbar";


export default function Home() {
  return (
    <>
      <TopNav />
      <Navbar />
      <main>
        {/* Hero Section for now, image to be placed here, probably should be it's own component (Hero Component) that accepts props that configures it */}
        <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white pt-32 pb-20 px-4">
          <h1 className="text-4xl font-bold text-center">Welcome Page</h1>
        </section>
      </main>
    </>
  )
}
