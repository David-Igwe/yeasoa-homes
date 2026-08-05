import { useParams } from "react-router-dom"
import TopNav from "../src/components/TopNav"
import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import {propertyList, type propertyItemType} from "../src/data/propertyList"


export default function Property() {
  const {propertyId} = useParams()
  const {propertyName, location, imgUrl} = propertyList.find((property) => property.id === propertyId ) as propertyItemType


  return (
    <>
      <TopNav />
      <Navbar />
      <Hero heading={propertyName} subheading={location} image={imgUrl} />
      <section className="py-8 px-5 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-[65%_35%] justify-items-end gap-5 sm:gap-0" >
          <img src={imgUrl} alt={propertyName} className="object-cover object-center w-full sm:w-full h-65 lg:h-75 rounded-lg" />
          <div className="w-full sm:w-[70%] justify-self-center">
            <p className="underline underline-offset-8 text-sm font-bold mb-4">Book Your Stay</p>
            <div className="bg-chart-1 p-2 rounded-xs">
              <p className="text-chart-5 text-sm font-medium">Check In</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
