const STEPS = [
  {
    step: "01",
    title: "Діагностика",
    text: "Оцінюємо процеси, дані та вузькі місця команди.",
  },
  {
    step: "02",
    title: "Пріоритети",
    text: "Визначаємо 3–5 ініціатив з найбільшим впливом.",
  },
  {
    step: "03",
    title: "Запуск",
    text: "Впроваджуємо зміни разом із вашою командою.",
  },
  {
    step: "04",
    title: "Контроль",
    text: "Відстежуємо KPI та коригуємо план у динаміці.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="border-y border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-primary mb-3 text-sm font-bold tracking-[0.12em] uppercase">
            Підхід
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Чіткий процес від аналізу до ефекту
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Працюємо швидко, прозоро й з фокусом на рішення, які можна
            впровадити вже цього кварталу.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ step, title, text }, index) => (
            <div key={step} className="relative">
              {index < STEPS.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-1rem)] bg-border lg:block" />
              )}
              <p className="text-primary mb-3 text-sm font-extrabold tracking-wider">
                {step}
              </p>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
