import { useState, type FormEvent } from "react"
import { Globe, Mail, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const DATA = [
  { icon: Phone, info: "+38 (044) 123 45 67" },
  { icon: Mail, info: "hello@fde.consulting" },
  { icon: Send, info: "Відповідаємо протягом 1 робочого дня" },
]

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSent(false), 2500)
  }

  return (
    <section id="contact" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Звʼяжіться з нами</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
            Залиште запит — запропонуємо формат консультації під ваш бізнес.
          </p>
        </div>
        <Card className="mx-auto grid max-w-5xl grid-cols-1 gap-10 rounded-2xl p-8 shadow-xl lg:grid-cols-2 lg:p-10">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-base">
                  Імʼя
                </Label>
                <Input id="first-name" placeholder="Олена" className="h-11" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-base">
                  Прізвище
                </Label>
                <Input id="last-name" placeholder="Кравченко" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Email або телефон
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="name@company.com"
                className="h-11"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">
                Коротко про запит
              </Label>
              <Textarea
                id="message"
                placeholder="Що хочете покращити у бізнесі?"
                rows={5}
                className="resize-none"
              />
            </div>
            <Button className="w-full sm:w-auto sm:min-w-[180px]" size="lg" type="submit">
              {sent ? "Заявку надіслано" : "Надіслати заявку"}
            </Button>
          </form>
          <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-8 lg:p-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Контактна інформація
              </h3>
              <p className="mb-12 max-w-lg text-emerald-100/80">
                Заповніть форму — команда FDE Consulting відповість протягом
                одного робочого дня.
              </p>
              <div className="space-y-6">
                {DATA.map(({ icon: Icon, info }) => (
                  <div key={info} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-emerald-50">{info}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <a
                href="#"
                aria-label="Сайт"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-100 transition-all hover:bg-white/20 hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@fde.consulting"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-100 transition-all hover:bg-white/20 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
