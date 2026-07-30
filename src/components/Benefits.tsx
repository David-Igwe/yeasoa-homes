import { benefitList } from "../data/benefitList";

export default function Benefits() {
  return (
    <section className="py-12 px-15">
      <h3 className="font-display mb-6 text-center text-xl">
        Why Shortlet with Yeasoa Homes?
      </h3>
      <div className="flex flex-wrap justify-around">
        {benefitList.map(({ icon: Icon, heading, description }) => (
          <div className="w-50 h-45">
            <Icon className="size-15" stroke="1.25" />
            <h4 className="font-bold mb-1">{heading}</h4>
            <p className="text-chart-3 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
