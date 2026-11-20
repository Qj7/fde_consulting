const CASES = [
  {
    tag: "Рітейл",
    title: "Мережа магазинів скоротила цикл рішень на 40%",
    text: "Побудували систему KPI та щотижневий операційний ритм для 12 підрозділів.",
    metrics: [
      { value: "−40%", label: "час рішень" },
      { value: "+18%", label: "виконання плану" },
    ],
  },
  {
    tag: "SaaS",
    title: "Продуктова компанія вийшла на новий ринок за 90 днів",
    text: "Сформували go-to-market стратегію, ціноутворення та модель партнерств.",
    metrics: [
      { value: "90 днів", label: "до контрактів" },
      { value: "+2.1×", label: "pipeline" },
    ],
  },
  {
    tag: "Виробництво",
    title: "Завод знизив операційні втрати на 22%",
    text: "Оптимізували ланцюг постачання та контроль якості змін.",
    metrics: [
      { value: "−22%", label: "витрати" },
      { value: "+27%", label: "прозорість" },
    ],
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-primary mb-3 text-sm font-bold tracking-[0.12em] uppercase">
            Кейси
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Як бізнеси зростають із FDE Consulting
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Реальні результати клієнтів у стратегії, операціях і трансформації.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {CASES.map(({ tag, title, text, metrics }) => (
            <article
              key={title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(18,24,22,0.28)]"
            >
              <div className="flex flex-1 flex-col p-7">
                <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {tag}
                </span>
                <h3 className="mb-3 text-xl font-bold leading-snug">{title}</h3>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-border bg-surface/70 px-7 py-5">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-primary text-xl font-extrabold">{metric.value}</p>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
