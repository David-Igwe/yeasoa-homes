import { type PropertyFeature } from "../../public/data/propertyFeatureList";

export default function FeatureItem({ feature }: { feature: PropertyFeature }) {
  const { feature: featureDescription, icon: Icon } = feature;
  return (
    <div className="flex w-60 h-14 border border-ring rounded-lg items-center">
      <Icon className="stroke-chart-5 mx-3" />
      <span className="text-xs text-chart-5">{featureDescription}</span>
    </div>
  );
}
