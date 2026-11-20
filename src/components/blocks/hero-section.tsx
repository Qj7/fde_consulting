import { useEffect, useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ChartColumnIncreasing,
  Mail,
  Menu,
  Star,
  Target,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV_LIST = [
  { label: "Послуги", href: "#services", icon: Briefcase },
  { label: "Підхід", href: "#approach", icon: Target },
  { label: "Кейси", href: "#cases", icon: ChartColumnIncreasing },
  { label: "Контакти", href: "#contact", icon: Mail },
]

const TRUST = ["NovaTrade", "GreenLine", "Atlas Soft", "Prime Agro", "Helix Lab", "BrightPath"]

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="mt-3 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
      {NAV_LIST.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onNavigate}
            className="hover:text-primary block rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors"
          >
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
    <nav className="relative z-30">
      <div className="flex items-center gap-4 py-4">
        <a href="#top" className="shrink-0 text-[1.15rem] font-extrabold tracking-tight">
          <span className="text-primary">FDE</span> Consulting
        </a>
        <div className="ml-8 hidden lg:block">
          <NavList />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Хочу консультацію</a>
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
            aria-label={openNav ? "Закрити меню" : "Відкрити меню"}
          >
            {openNav ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      {openNav && (
        <div className="absolute inset-x-0 top-full rounded-2xl border border-border bg-white p-3 shadow-lg lg:hidden">
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

function StrategyBoard() {
  return (
    <div className="float-soft relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_80px_-28px_rgba(18,24,22,0.25)]">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Операційна панель
          </p>
          <p className="text-sm font-bold">Стратегічні ініціативи · Q2</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            На треку
          </span>
          <span className="hidden rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground sm:inline">
            12 ініціатив
          </span>
        </div>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-5">
        {[
          {
            title: "Нові",
            items: [
              { name: "Go-to-market EU", meta: "Atlas Soft", tag: "Високий" },
              { name: "Операційний ритм", meta: "NovaTrade", tag: "Середній" },
            ],
          },
          {
            title: "В роботі",
            items: [
              { name: "Cash-flow модель", meta: "Prime Agro", tag: "Високий" },
              { name: "KPI для підрозділів", meta: "GreenLine", tag: "Високий" },
            ],
          },
          {
            title: "Результат",
            items: [
              { name: "Скорочення циклу рішень", meta: "−40%", tag: "Готово" },
              { name: "Зростання pipeline", meta: "+2.1×", tag: "Готово" },
            ],
          },
        ].map((column) => (
          <div key={column.title} className="rounded-xl bg-surface p-3">
            <p className="mb-3 px-1 text-xs font-bold tracking-wide text-muted-foreground uppercase">
              {column.title}
            </p>
            <div className="space-y-2.5">
              {column.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-border/80 bg-white p-3 shadow-sm"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold leading-snug">{item.name}</p>
                    <span
                      className={
                        item.tag === "Готово"
                          ? "shrink-0 rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-bold text-accent-foreground"
                          : item.tag === "Високий"
                            ? "shrink-0 rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary"
                            : "shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground"
                      }
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.meta}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(15,159,110,0.12),transparent_70%)]" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Nav />

        <div className="mx-auto flex max-w-3xl flex-col items-center px-1 pt-10 pb-10 text-center sm:pt-14 sm:pb-12">
          <a
            href="#services"
            className="fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/90 px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur transition-colors hover:border-primary/30 hover:text-primary"
          >
            <span className="bg-primary size-1.5 rounded-full" />
            Новий формат: стратегія + супровід впровадження
            <ArrowUpRight className="size-3.5" />
          </a>

          <p className="fade-up-delay-1 text-primary mb-4 text-sm font-bold tracking-[0.12em] uppercase">
            FDE Consulting
          </p>

          <h1 className="fade-up-delay-1 mb-5 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            Стратегічний консалтинг для зростання бізнесу
          </h1>

          <p className="fade-up-delay-2 mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg">
            Діагностика, стратегія, операційна ефективність і супровід змін —
            щоб команда приймала рішення швидше й досягала вимірюваних результатів.
          </p>

          <div className="fade-up-delay-2 mb-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contact">
                Хочу консультацію
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#services">Наші послуги</a>
            </Button>
          </div>

          <div className="fade-up-delay-3 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9 / 5</span>
            <span>на основі відгуків клієнтів</span>
          </div>
        </div>

        <div className="fade-up-delay-3 relative z-20 -mb-10 pb-2 sm:-mb-14">
          <StrategyBoard />
        </div>
      </div>

      <div className="relative z-10 border-y border-border bg-surface pt-16 pb-10 sm:pt-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
            Нам довіряють
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
            {TRUST.map((name) => (
              <span
                key={name}
                className="text-sm font-bold tracking-wide text-foreground/35 uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
