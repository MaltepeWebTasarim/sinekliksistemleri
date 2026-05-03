import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Yıl Sektör Deneyimi' },
  { value: '81', label: 'İle Demonte Teslimat' },
  { value: '50.000+', label: 'Başarılı Uygulama' },
  { value: '%100', label: 'Montaj Garantisi' },
]

const trustBadges = ['Üretici Fiyatına', 'Montaj Dahil', 'Garanti Belgeli', '81 İl Kapsamında']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fdf8 0%, #edf7ec 40%, #ffffff 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, #83bd81 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 bg-white border border-green-200 rounded-full px-4 py-2 mb-7 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" style={{ animation: 'pulse 2s infinite' }} />
            <span className="text-sm font-semibold text-brand">
              Türkiye&apos;nin Üretici Markası — Gebze, Kocaeli
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand leading-tight mb-6 tracking-tight">
            <a href="/" className="hover:text-primary transition-colors duration-200">
              Sineklik Sistemleri
            </a>
            &apos;nde{' '}
            <span className="relative">
              <span style={{ color: '#83bd81' }}>Üretim Gücü</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                preserveAspectRatio="none"
                style={{ height: '6px' }}
              >
                <path d="M0 6 Q75 0 150 4 Q225 8 300 2" stroke="#83bd81" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            : Fenetre Systems
          </h1>

          <div className="text-lg md:text-xl text-gray-600 mb-9 leading-relaxed space-y-4">
            <p>
              <strong className="text-brand">Fenetre Systems</strong>, Gebze&apos;deki üretim tesisinde hayat bulan her
              ürünü özenle paketleyip <strong>81 ilin adresine</strong> demonte hâlde gönderir. Montaj ekibimiz kapınızda.
            </p>
            <p>
              Sabit sineklikten <em>plise sisteme</em>, eşiksiz kapı çözümünden{' '}
              <u>zip perdeye</u> uzanan kapsamlı ürün ailesi; kalite standartlarından hiçbir ödün verilmeden tek çatı
              altında sunulur.
            </p>
            <p>
              Araştırıp karar vermek için zaman harcamayın. <strong>Ölçü alınır, üretilir, teslim edilir, monte edilir.</strong>{' '}
              Hepsi tek bir sorumluluğun altında.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20sistemleri%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-4 rounded-xl transition-colors text-base shadow-md shadow-green-200"
            >
              Ücretsiz Teklif Al <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+905403363873"
              className="flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold px-7 py-4 rounded-xl transition-colors text-base"
            >
              <Phone className="w-5 h-5" /> 0540 336 38 73
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 text-sm font-medium text-brand"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div
                className="text-3xl md:text-4xl font-black mb-1.5"
                style={{ color: '#83bd81' }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-500 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
