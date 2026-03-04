interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-bg to-bg-cream py-20 lg:py-28 px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto text-center">
        {label && (
          <span className="inline-block text-accent-dark font-semibold text-xs uppercase tracking-[0.15em] mb-4">
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-text-light max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
