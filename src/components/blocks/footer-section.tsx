import { Button } from "@/components/ui/button"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "Послуги", href: "#services" },
  { title: "Підхід", href: "#approach" },
  { title: "Кейси", href: "#cases" },
  { title: "Контакти", href: "#contact" },
]

export function FooterSection() {
  return (
    <footer className="pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="border-border flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t pt-8 text-center md:justify-between">
          <p className="text-foreground text-sm">
            © {YEAR} FDE Consulting. Усі права захищено.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {LINKS.map(({ title, href }) => (
              <li key={title}>
                <a href={href} className="text-foreground hover:text-primary text-sm font-medium">
                  {title}
                </a>
              </li>
            ))}
            <Button asChild className="w-full sm:max-w-fit">
              <a href="#contact">Хочу консультацію</a>
            </Button>
          </ul>
        </div>
      </div>
    </footer>
  )
}
