import FeatureItem from "../components/FeatureItem";
import { type PropertyFeature } from "../data/propertyFeatureList";

type PropertyFeaturesProps = {
  features: PropertyFeature[],
  heading: string
}

export default function PropertyFeatures({features, heading}: PropertyFeaturesProps) {
  return (
    <section className="py-12 sm:mx-20">
      <h3 className="mb-5 sm:mx-20 text-center sm:text-start font-medium text-xl">
        {heading}
      </h3>
      <div className="grid justify-items-center grid-col sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {features.map((feature) => (
          <FeatureItem feature={feature} />
        ))}
      </div>
    </section>
  );
}
