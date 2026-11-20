import { useEffect, useState } from "react"
import { Briefcase, ChartColumnIncreasing, Mail, Menu, Target, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV_LIST = [
  { label: "Послуги", href: "#services", icon: Briefcase },
  { label: "Підхід", href: "#approach", icon: Target },
  { label: "Кейси", href: "#cases", icon: ChartColumnIncreasing },
  { label: "Контакти", href: "#contact", icon: Mail },
]

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
      {NAV_LIST.map(({ icon: Icon, label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onNavigate}
            className="hover:text-primary flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Nav() {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setOpenNav(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="rounded-xl border border-border/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
      <div className="flex items-center gap-4">
        <a href="#top" className="shrink-0 text-lg font-bold tracking-tight">
          FDE Consulting
        </a>
        <div className="ml-auto hidden lg:block">
          <NavList />
        </div>
        <Button asChild size="sm" className="hidden shrink-0 lg:inline-flex">
          <a href="#contact">Хочу консультацію</a>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="ml-auto lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          aria-label={openNav ? "Закрити меню" : "Відкрити меню"}
        >
          {openNav ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
      {openNav && (
        <div className="mt-2 border-t pt-2 lg:hidden">
          <NavList onNavigate={() => setOpenNav(false)} />
          <Button asChild className="mt-3 w-full" size="sm">
            <a href="#contact" onClick={() => setOpenNav(false)}>
              Хочу консультацію
            </a>
          </Button>
        </div>
      )}
    </nav>
  )
}

export function HeroSection() {
  return (
    <header id="top" className="relative w-full overflow-hidden p-4 lg:p-6">
      <div className="relative z-20 mx-auto w-full max-w-7xl">
        <Nav />
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 pt-10 lg:grid-cols-2 lg:gap-12 lg:pt-16 lg:pb-10">
        <div className="px-1">
          <p className="text-primary mb-4 text-sm font-semibold tracking-wide uppercase">
            FDE Consulting
          </p>
          <h1 className="mb-6 scroll-m-20 text-4xl !leading-tight font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Стратегічний консалтинг
            <br />
            для зростання бізнесу
          </h1>
          <p className="text-muted-foreground mb-4 max-w-xl text-lg leading-relaxed text-balance md:text-xl">
            Діагностика, стратегія, операційна ефективність і супровід змін —
            щоб ваша команда приймала рішення швидше й досягала вимірюваних
            результатів.
          </p>
          <div className="mt-8 mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contact">Хочу консультацію</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#services">Наші послуги</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-neutral-400 uppercase">
            <span>NovaTrade</span>
            <span>GreenLine</span>
            <span>Atlas Soft</span>
            <span>Prime Agro</span>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <img
            alt="Команда на стратегічній сесії"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1600&q=80"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </header>
  )
}
