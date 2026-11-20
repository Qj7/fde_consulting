import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800",
    name: "Дмитро Федорчук",
    position: "Managing Partner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
    name: "Ірина Довженко",
    position: "Head of Strategy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
    name: "Сергій Павленко",
    position: "Operations Lead",
  },
]

export function TeamSection() {
  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-primary block text-sm font-semibold">Команда</p>
          <h2 className="my-4 text-3xl font-bold md:text-4xl">
            Експерти поруч із вами
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg text-balance">
            Партнери з досвідом у стратегії, фінансах і операційному
            менеджменті для українського та європейського бізнесу.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, name, position }) => (
            <Card key={name} className="border-0 bg-transparent shadow-none">
              <CardHeader className="p-0">
                <img
                  src={image}
                  alt={name}
                  className="mx-auto h-80 w-full max-w-md rounded-xl object-cover object-top sm:h-96"
                />
              </CardHeader>
              <CardContent className="mt-4 text-center">
                <p className="mb-2 text-lg font-semibold">{name}</p>
                <p className="text-muted-foreground text-sm font-semibold uppercase">
                  {position}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
