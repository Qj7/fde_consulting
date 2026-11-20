import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    <section className="border-y border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-primary mb-3 text-sm font-bold tracking-[0.12em] uppercase">
            Відгуки
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Що кажуть клієнти
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Керівники компаній, з якими ми будуємо стратегію та операційну
            ефективність.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote }) => (
            <blockquote
              key={name}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-7"
            >
              <p className="mb-8 flex-1 text-[1.05rem] leading-relaxed text-foreground/85">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="size-11">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback>
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
