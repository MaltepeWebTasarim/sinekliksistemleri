import { Phone, MessageCircle } from 'lucide-react'

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden no-print">
      <div className="grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
        <a
          href="tel:+905403363873"
          className="flex items-center justify-center gap-2 py-4 bg-brand text-white font-semibold text-sm active:opacity-90 transition-opacity"
          aria-label="Telefon ile ara"
        >
          <Phone className="w-5 h-5" />
          <span>Hemen Ara</span>
        </a>
        <a
          href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20sistemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold text-sm active:opacity-90 transition-opacity"
          aria-label="WhatsApp ile iletişim"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
