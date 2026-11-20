import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <section id="approach" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mx-auto mb-6 w-max">
            Підхід
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Чіткий процес від аналізу до ефекту
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Працюємо швидко, прозоро й з фокусом на рішення, які можна
            впровадити вже цього кварталу.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ step, title, text }) => (
            <Card key={step} className="border-0 bg-transparent shadow-none">
              <CardHeader className="px-0">
                <p className="text-primary mb-2 text-sm font-bold tracking-wider">
                  {step}
                </p>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground px-0">{text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
