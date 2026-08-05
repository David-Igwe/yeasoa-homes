type HeroProps = {
    heading: string,
    subheading?: string,
    image: string
}

export default function Hero({heading, subheading, image}: HeroProps) {
  return (
    <section className="relative bg-no-repeat bg-center bg-cover text-white w-full h-70" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative flex flex-col h-full justify-center items-center gap-y-5">
        <header className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-5 px-8">{heading}</h1>
          {subheading && <p className="text-sm md:text-base">{subheading}</p>}
        </header>
      </div>
    </section>
  )
}
