import { ArrowRight, ChartNoAxesCombined, Cog, Landmark, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <section id="services" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <Badge variant="outline" className="mb-6 w-max">
            <Sparkles className="mr-2 h-4 w-4" />
            Послуги
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Рішення, які працюють на результат бізнесу
          </h2>
          <p className="text-muted-foreground text-lg">
            Ми поєднуємо стратегічне мислення з практичним впровадженням — не
            презентації «на полицю», а зміни, які видно в цифрах.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="bg-primary/10 text-primary mb-4 flex h-11 w-11 items-center justify-center rounded-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent />
              <CardFooter>
                <Button asChild variant="ghost" className="px-0 hover:bg-transparent">
                  <a href="#contact">
                    Дізнатися більше
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
