import { useState } from "react"
import { ChevronDown } from "lucide-react"

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
  const [open, setOpen] = useState(0)

  return (
    <section className="border-y border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-primary mb-3 text-sm font-bold tracking-[0.12em] uppercase">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Часті запитання
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Короткі відповіді про формат роботи, терміни та підхід FDE Consulting.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, index) => {
            const isOpen = open === index
            return (
              <div
                key={q}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold sm:text-lg">{q}</span>
                  <ChevronDown
                    className={`text-primary size-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
