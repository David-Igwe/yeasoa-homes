import { benefitList } from "../data/benefitList";

export default function Benefits() {
  return (
    <section className="py-12 px-20 sm:px-35">
      <h3 className="mb-6 font-medium text-center md:text-start text-xl">
        Why Shortlet with Yeasoa Homes?
      </h3>
      <div className="flex flex-wrap justify-around mb-6">
        {benefitList.map(({ icon: Icon, heading, description }) => (
          <div className="w-50 h-45">
            <Icon className="size-15" stroke="1.25" />
            <h4 className="font-bold mb-1">{heading}</h4>
            <p className="text-chart-3 text-sm">{description}</p>
          </div>
        ))}
      </div>
      <h3 className="mb-2 font-medium text-center md:text-start text-xl">How it Works?</h3>
      <ol className="list-decimal list-inside text-sm">
        <li>
          <span className="font-bold">Browse</span> our curated listings.
        </li>
        <li>
          <span className="font-bold">Select</span> your dates and apartment.
        </li>
        <li>
          <span className="font-bold">Book</span> securely and instantly.
        </li>
        <li>
          <span className="font-bold">Arrive</span> to a ready-to-live luxury
          space.
        </li>
        <li>
          <span className="font-bold">Enjoy</span> - with our team on standby
          for any needs.
        </li>
      </ol>
    </section>
  );
}
