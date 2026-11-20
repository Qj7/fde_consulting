import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <section id="cases" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <Badge variant="outline" className="mb-6 w-max">
            Кейси
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Як бізнеси зростають із FDE Consulting
          </h2>
          <p className="text-muted-foreground text-lg">
            Реальні результати клієнтів у стратегії, операціях і трансформації.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CASES.map(({ tag, title, text, metrics }) => (
            <Card key={title} className="h-full shadow-sm">
              <CardHeader>
                <Badge className="mb-3 w-max" variant="secondary">
                  {tag}
                </Badge>
                <CardTitle className="text-xl leading-snug">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {text}
                </CardDescription>
              </CardHeader>
              <CardContent />
              <CardFooter className="bg-muted/40 mt-auto grid grid-cols-2 gap-4 border-t px-6 pt-4">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-primary text-xl font-bold">{metric.value}</p>
                    <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
