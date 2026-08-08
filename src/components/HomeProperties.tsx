import { propertyList } from "../data/propertyList";
import PropertyItem from "./PropertyItem";

export default function Properties() {
  return (
    <section className="py-10">
      <div className="text-center px-8">
        <h2 className="font-display text-2xl font-bold">
          Our Properties (Featured Shortlets)
        </h2>
        <p className="mt-3">
          Explore our collection of luxury apartments designed for short-term
          stays.
        </p>
        <p>
          Each property is meticulously selected and maintained for premium
          guest experiences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-y-10 justify-evenly mt-10">
        {propertyList.map((property) => (
          <PropertyItem property={property} key={property.propertyName} />
        ))}
      </div>
    </section>
  );
}
