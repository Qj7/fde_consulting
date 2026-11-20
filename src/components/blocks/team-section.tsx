const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800",
    name: "Дмитро Федорчук",
    position: "Managing Partner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
    name: "Ірина Довженко",
    position: "Head of Strategy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
    name: "Сергій Павленко",
    position: "Operations Lead",
  },
]

export function TeamSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-primary mb-3 text-sm font-bold tracking-[0.12em] uppercase">
            Команда
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Експерти поруч із вами
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-balance">
            Партнери з досвідом у стратегії, фінансах і операційному
            менеджменті для українського та європейського бізнесу.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, name, position }) => (
            <article key={name} className="text-center">
              <div className="mb-5 overflow-hidden rounded-2xl border border-border">
                <img
                  src={image}
                  alt={name}
                  className="mx-auto h-80 w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03] sm:h-96"
                />
              </div>
              <p className="mb-1 text-lg font-bold">{name}</p>
              <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {position}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
