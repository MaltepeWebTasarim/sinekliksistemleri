'use client'
import { useState, useEffect } from 'react'
import { Phone, Menu, X, ChevronRight } from 'lucide-react'

const navItems = [
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Marka', href: '#hakkimizda' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Bölgeler', href: '#bolgeler' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Ana Sayfa – Fenetre Systems">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #83bd81, #404e5e)' }}
            >
              <span className="text-white font-black text-sm tracking-tight">FS</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-brand text-lg block leading-none">Fenetre</span>
              <span className="text-xs font-semibold leading-none" style={{ color: '#83bd81' }}>
                Systems
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Ana menü">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary-light transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+905403363873"
              className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              0540 336 38 73
            </a>
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              WhatsApp&apos;tan Yaz <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-brand hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex flex-col gap-1 mb-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 rounded-xl text-sm font-medium text-gray-700 hover:bg-primary-light hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <a
                href="tel:+905403363873"
                className="flex items-center justify-center gap-2 flex-1 py-3 bg-brand text-white text-sm font-semibold rounded-xl"
              >
                <Phone className="w-4 h-4" /> Ara
              </a>
              <a
                href="https://wa.me/905403363873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 py-3 bg-primary text-white text-sm font-semibold rounded-xl"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
