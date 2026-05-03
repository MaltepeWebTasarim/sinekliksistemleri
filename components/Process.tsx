import { MessageSquare, Ruler, ClipboardCheck, Cog, PackageCheck, Truck, Wrench } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Danışma ve Ön Görüşme',
    desc: 'WhatsApp veya telefon üzerinden iletişime geçilir. Hangi ürün grubunun uygun olduğu, pencere veya kapı tipi, açıklık sayısı ve kullanım amacı belirlenir. Teknik ekibimiz soruları yanıtlar; doğru modeli birlikte seçeriz.',
    detail: 'Yanıt süresi genellikle 30 dakika içindedir.',
  },
  {
    step: '02',
    icon: Ruler,
    title: 'Ölçüm Aşaması',
    desc: 'Kullanıcıya ölçüm talimatı gönderilir. İstenen noktalarda en ve boy değerleri alınır. Ölçüm deneyimi olmayanlar için video rehber paylaşılır. Alternatif olarak bölge teknik ekibimiz yerinde ölçüm için randevu alabilir.',
    detail: 'Hatalı ölçümden kaynaklanan yeniden üretim ücretsizdir.',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Sipariş Onayı ve Ödeme',
    desc: 'Ölçüler alındıktan sonra fiyat teklifi hazırlanır ve yazılı olarak iletilir. Teklif onaylanınca sipariş sisteme işlenir. Ödeme sonrasında üretim kuyruğuna alınır.',
    detail: 'Teklif, 5 iş günü süreyle geçerli kalır.',
  },
  {
    step: '04',
    icon: Cog,
    title: 'Özel Ölçü Üretim',
    desc: 'Gebze tesisinde sipariş bazlı üretim başlar. Profil kesilir, boyanır, fırınlanır. File belirlenen gerginlik değerinde çerçeveye geçirilir. Her aşama üretim kartına işlenir.',
    detail: 'Standart sipariş üretimi: 5–7 iş günü.',
  },
  {
    step: '05',
    icon: PackageCheck,
    title: 'Kalite Kontrolü',
    desc: 'Üretim tamamlanan ürün üç ayrı kontrol noktasından geçer: profil boyutu doğrulanır, boya homojenliği incelenir, file gerginliği test edilir. Başarısız ürün sevk edilmez.',
    detail: 'Her ürüne kalite kontrol kaydı eklenir.',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Paketleme ve Kargo',
    desc: 'Onaylanan ürün demonte hâlde, çift katmanlı koruyucu malzemeyle paketlenir. Kargo firmasına teslim edilir; takip numarası müşteriye iletilir. 81 ilin her adresine teslimat yapılır.',
    detail: 'Kargo süresi: 1–3 iş günü.',
  },
  {
    step: '07',
    icon: Wrench,
    title: 'Montaj ve Teslim',
    desc: 'Ürün adrese ulaştıktan sonra bölge montaj ekibimiz randevu alır. Kurulum yerinde gerçekleştirilir. Müşteri teslim tutanağını imzalar. İki yıllık üretici garantisi bu noktada başlar.',
    detail: 'Montaj süresi: konut için 1–3 saat.',
  },
]

export default function Process() {
  return (
    <section id="surec" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-flex">Nasıl Çalışıyoruz</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mb-5">
            7 Adımda <span style={{ color: '#83bd81' }}>Mükemmel Uygulama</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Danışma görüşmesinden montaj teslim tutanağına kadar her adım belgelidir.
            Süreç şeffaf; hiçbir aşamada müşteri bilgisi dışında işlem yapılmaz.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #83bd81, #404e5e)' }}
          />

          <div className="space-y-6 md:space-y-0">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className={`md:flex items-start gap-8 md:pl-20 pb-8 md:pb-10 relative ${
                    idx === steps.length - 1 ? '' : ''
                  }`}
                >
                  <div
                    className="hidden md:flex absolute left-0 w-16 h-16 rounded-full items-center justify-center font-black text-white text-sm shadow-lg flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #83bd81, #404e5e)' }}
                  >
                    {step.step}
                  </div>

                  <div className="md:hidden flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-xs"
                      style={{ background: 'linear-gradient(135deg, #83bd81, #404e5e)' }}
                    >
                      {step.step}
                    </div>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 flex-1 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#edf7ec' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: '#83bd81' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-brand text-base mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.desc}</p>
                        <div
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ backgroundColor: '#edf7ec', color: '#404e5e' }}
                        >
                          <span>ℹ</span> {step.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 bg-primary rounded-2xl p-6 md:p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Süreci başlatmak ister misiniz?</h3>
          <p className="text-white/80 text-sm mb-5 max-w-lg mx-auto">
            WhatsApp&apos;tan bir mesaj gönderin; teknik ekibimiz ölçüm talimatını ve fiyat teklifini
            aynı gün içinde iletir.
          </p>
          <a
            href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20siparişi%20vermek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3 rounded-xl hover:bg-primary-light transition-colors text-sm"
          >
            WhatsApp&apos;tan Başlayın
          </a>
        </div>
      </div>
    </section>
  )
}
