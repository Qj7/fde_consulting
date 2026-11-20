import { useState, type FormEvent } from "react"
import { Mail, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const DATA = [
  { icon: Phone, info: "+38 (044) 123 45 67", href: "tel:+380441234567" },
  { icon: Mail, info: "hello@fde.consulting", href: "mailto:hello@fde.consulting" },
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
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-primary mb-3 text-sm font-bold tracking-[0.12em] uppercase">
            Контакти
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Звʼяжіться з нами
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Залиште запит — запропонуємо формат консультації під ваш бізнес.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-border lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={onSubmit} className="space-y-5 bg-white p-7 sm:p-10">
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">Імʼя</Label>
                <Input id="first-name" placeholder="Олена" className="h-11" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Прізвище</Label>
                <Input id="last-name" placeholder="Кравченко" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email або телефон</Label>
              <Input
                id="email"
                type="text"
                placeholder="name@company.com"
                className="h-11"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Коротко про запит</Label>
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

          <aside className="border-t border-border bg-surface p-7 sm:p-10 lg:border-t-0 lg:border-l">
            <h3 className="mb-3 text-xl font-bold">Контактна інформація</h3>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Заповніть форму — команда FDE Consulting відповість протягом
              одного робочого дня.
            </p>
            <div className="space-y-5">
              {DATA.map(({ icon: Icon, info, href }) => {
                const content = (
                  <>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-border">
                      <Icon className="size-4" />
                    </div>
                    <span className="font-medium">{info}</span>
                  </>
                )
                return href ? (
                  <a
                    key={info}
                    href={href}
                    className="flex items-center gap-3 transition-colors hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info} className="flex items-center gap-3">
                    {content}
                  </div>
                )
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
