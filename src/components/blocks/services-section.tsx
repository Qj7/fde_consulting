import { ArrowRight, ChartNoAxesCombined, Cog, Landmark } from "lucide-react"

import { Button } from "@/components/ui/button"

const SERVICES = [
  {
    icon: ChartNoAxesCombined,
    title: "Стратегія та зростання",
    description:
      "Формуємо цілі, пріоритети ринку та план дій на 6–18 місяців із чіткими KPI.",
  },
  {
    icon: Cog,
    title: "Операційна ефективність",
    description:
      "Оптимізуємо процеси, ролі та контроль, щоб команда працювала без хаосу.",
  },
  {
    icon: Landmark,
    title: "Фінансовий консалтинг",
    description:
      "Будуємо фінансову модель, управління cash flow та прозору звітність.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-primary mb-3 text-sm font-bold tracking-[0.12em] uppercase">
            Послуги
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Рішення, які працюють на результат бізнесу
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Поєднуємо стратегічне мислення з практичним впровадженням — не
            презентації «на полицю», а зміни, які видно в цифрах.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all hover:border-primary/25 hover:shadow-[0_18px_40px_-28px_rgba(15,159,110,0.35)]"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-transform group-hover:scale-105">
                <Icon className="size-5" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                {description}
              </p>
              <Button asChild variant="ghost" className="w-fit px-0 hover:bg-transparent">
                <a href="#contact" className="text-primary">
                  Дізнатися більше
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
