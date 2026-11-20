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
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#top" className="text-lg font-extrabold tracking-tight">
              <span className="text-primary">FDE</span> Consulting
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              © {YEAR} FDE Consulting. Усі права захищено.
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {LINKS.map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  {title}
                </a>
              </li>
            ))}
            <li>
              <Button asChild size="sm">
                <a href="#contact">Хочу консультацію</a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
