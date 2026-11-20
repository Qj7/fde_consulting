const FAQS = [
  {
    q: "З чого починається співпраця?",
    a: "З короткої діагностичної сесії: збираємо контекст бізнесу, визначаємо пріоритети та пропонуємо формат роботи на 30–90 днів.",
  },
  {
    q: "Для яких компаній підходить FDE Consulting?",
    a: "Для зростаючих B2B, IT/SaaS, виробництва, рітейлу та сервісних компаній, де потрібні стратегія, операції або фінансова прозорість.",
  },
  {
    q: "Скільки триває типовий проєкт?",
    a: "Діагностика — 2–3 тижні, стратегічний спринт — 4–8 тижнів, супровід впровадження — від одного кварталу.",
  },
  {
    q: "Чи працюєте ви з командою клієнта на місці?",
    a: "Так. Ми працюємо гібридно: стратегічні сесії офлайн або онлайн і регулярний супровід із вашими керівниками.",
  },
]

export function FaqSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Часті запитання
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Короткі відповіді про формат роботи, терміни та підхід FDE
            Consulting.
          </p>
        </div>
        {FAQS.map(({ q, a }) => (
          <div key={q} className="mb-2">
            <h3 className="border-b py-6 text-lg font-semibold">{q}</h3>
            <p className="text-muted-foreground py-6 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
