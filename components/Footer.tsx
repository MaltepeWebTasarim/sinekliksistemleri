import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Marka Değeri', href: '#hakkimizda' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Bölgeler', href: '#bolgeler' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

const productLinks = [
  { label: 'Sabit Sineklik', href: '/' },
  { label: 'Plise Sineklik', href: '/' },
  { label: 'Eşiksiz Sineklik', href: '/' },
  { label: 'Duble Sineklik', href: '/' },
  { label: 'Plise Perde', href: '/' },
  { label: 'Jaluzi Perde', href: '/' },
  { label: 'Honeycomb Perde', href: '/' },
  { label: 'Zip Perde', href: '/' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/FenetreSystems/', icon: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/fenetresystems/', icon: 'in' },
  { label: 'X / Twitter', href: 'https://x.com/FenetreSystems', icon: 'x' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fenetresystems/', icon: 'li' },
  { label: 'Pinterest', href: 'https://tr.pinterest.com/fenetresystems/', icon: 'p' },
  { label: 'YouTube', href: 'https://www.youtube.com/@FenetreSystems', icon: 'yt' },
]

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #83bd81, #6aad68)' }}
              >
                <span className="text-white font-black text-sm">FS</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg block leading-none">Fenetre</span>
                <span className="text-xs font-semibold leading-none" style={{ color: '#83bd81' }}>
                  Systems
                </span>
              </div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Gebze, Kocaeli&apos;nden Türkiye&apos;nin 81 iline sineklik ve perde sistemleri.
              Üretimden montaja, tek el.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+905403363873"
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +90 540 336 38 73
              </a>
              <a
                href="mailto:info@fenetresystems.com"
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info@fenetresystems.com
              </a>
              <div className="flex items-start gap-2.5 text-white/80">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Cumhuriyet Mah. 2233 Sok. No:4/A<br />Gebze / Kocaeli</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Sayfalar
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Ürünlerimiz
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Sosyal Medya
            </h4>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-10 rounded-lg bg-white/10 hover:bg-primary/80 transition-colors flex items-center justify-center text-xs font-bold text-white/80 hover:text-white"
                  title={s.label}
                >
                  {s.icon.toUpperCase()}
                </a>
              ))}
            </div>

            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: 'rgba(131,189,129,0.12)' }}
            >
              <p className="text-xs text-white/60 mb-2">Bayilik başvurusu için:</p>
              <a
                href="https://wa.me/905403363873?text=Bayilik%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline"
                style={{ color: '#83bd81' }}
              >
                WhatsApp&apos;tan Yazın →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-center md:text-left">
            <span>© {new Date().getFullYear()}</span>
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener"
              className="text-white/70 hover:text-white transition-colors font-semibold"
            >
              Fenetre Systems
            </a>
            <span>— Tüm hakları saklıdır.</span>
            <span className="hidden md:inline mx-2 text-white/20">|</span>
            <span>Sineklik Sistemleri — sinekliksistemleri.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-white/50 hover:text-white/80 transition-colors">
              Sineklik Sistemleri
            </a>
            <a href="/" className="text-white/50 hover:text-white/80 transition-colors">
              Plise Perde
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
