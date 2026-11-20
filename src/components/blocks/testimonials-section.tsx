import { Sparkles } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Олена Кравченко",
    role: "CEO, BrightPath",
    quote:
      "FDE Consulting допомогли перезібрати операційну модель за три місяці. Зʼявилась прозора стратегія, зрозумілі KPI і команда в одному напрямку.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Андрій Мельник",
    role: "COO, NovaTrade",
    quote:
      "Практичний підхід без зайвої теорії. За квартал скоротили час ухвалення рішень і підвищили виконання плану продажів.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Марія Лисенко",
    role: "Founder, Helix Lab",
    quote:
      "Сильна команда, яка працює пліч-о-пліч із керівниками. Отримали roadmap і реальний супровід впровадження.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mx-auto mb-8 w-max">
            <Sparkles className="mr-2 h-4 w-4" />
            Відгуки
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Що кажуть клієнти
          </h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-lg">
            Керівники компаній, з якими ми будуємо стратегію та операційну
            ефективність.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote }) => (
            <Card key={name} className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0 text-center">
                <Avatar className="mx-auto mb-4 h-20 w-20">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback>
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <p className="mb-1 text-lg font-semibold">{name}</p>
                <p className="text-muted-foreground mb-4 text-sm">{role}</p>
                <blockquote className="text-muted-foreground mx-auto max-w-lg">
                  &quot;{quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
