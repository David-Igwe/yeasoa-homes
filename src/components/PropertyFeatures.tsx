import FeatureItem from "../components/FeatureItem";
import { type PropertyFeature } from "../data/propertyFeatureList";

export default function PropertyFeatures({features}: {features: PropertyFeature[]}) {
  return (
    <section className="my-8 sm:mx-20">
      <h3 className="font-display mb-5 text-center text-xl">
        All Properties Include
      </h3>
      <div className="grid justify-items-center grid-col sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {features.map((feature) => (
          <FeatureItem feature={feature} />
        ))}
      </div>
    </section>
  );
}
