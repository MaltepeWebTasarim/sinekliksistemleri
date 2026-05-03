import { Factory, Cpu, Ruler, ShieldCheck, Zap, BarChart3 } from 'lucide-react'

const capabilities = [
  {
    icon: Factory,
    title: 'Kendi Üretim Tesisi',
    desc: "Gebze'de kurulu üretim hattı, sipariş yoğunluğuna göre kapasitesini esnetilebilir. Makine parkında profil kesme, zımpara ve boya ünitesi bir arada bulunur.",
  },
  {
    icon: Ruler,
    title: '±0,5 mm Hassas Kesim',
    desc: 'CNC destekli profil kesim sistemi, her siparişin ölçüsünü milimetre toleransıyla işler. Bu hassasiyet kurulum sonrası boşluk ve sızıntı şikâyetini ortadan kaldırır.',
  },
  {
    icon: Cpu,
    title: 'Dijital Sipariş Yönetimi',
    desc: 'Her siparişin ölçüsü dijital ortamda kaydedilir. Yeniden sipariş durumunda aynı ölçü arşivden çekilir; kullanıcı tekrar ölçüm yapmak zorunda kalmaz.',
  },
  {
    icon: ShieldCheck,
    title: 'Kalite Kontrol Protokolü',
    desc: 'Her ürün sevkiyat öncesinde üç ayrı kontrol noktasından geçer: profil boyutu, boya homojenliği ve file gerginliği. Başarısız ürün sevk edilmez, yeniden üretilir.',
  },
  {
    icon: Zap,
    title: 'Hızlı Üretim Süreci',
    desc: 'Standart siparişler 5–7 iş günü içinde üretilip kargoya teslim edilir. Acil projeler için öncelikli üretim hattı talep üzerine devreye alınabilir.',
  },
  {
    icon: BarChart3,
    title: 'Kapasite ve Ölçek',
    desc: 'Günlük üretim kapasitesi konut tipi ürünlerde 150 adedi aşar. Toplu projeler, otel ve site siparişleri için ayrı proje planlama süreci işletilir.',
  },
]

export default function Experience() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="badge mb-4 inline-flex">Deneyim ve Uzmanlık</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand mb-6 leading-tight">
              15 Yılın Üretim Birikimi:{' '}
              <span style={{ color: '#83bd81' }}>Teknik Altyapı</span>
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
              <p>
                Fenetre Systems&apos;in üretim anlayışı, <strong className="text-brand">teknik bilginin</strong> pratikte
                karşılık bulduğu bir model üzerine kurulu. Profil seçiminden boya uygulamasına,
                file gerginliğinden paket kaplamaya kadar her adım, geçmiş siparişlerden elde
                edilen gerçek verilere göre iyileştirilmiştir.
              </p>
              <p>
                Sektörde 15 yılı aşkın süre geçiren ekip, önce montaj yaparak{' '}
                <em>uygulamayı öğrendi</em>, ardından üretimi bizzat devraldı. Bu sıralama
                önemlidir: montajcı bakış açısı olmadan üretilen ürün, kurulumda beklenmedik
                sorunlar yaratır.
              </p>
              <p>
                <a href="/" className="text-primary hover:underline font-semibold">
                  Pencere sinekliği
                </a>{' '}
                üretiminde profil et kalınlığı kritik bir parametredir.{' '}
                <strong className="text-brand">1,2 mm altındaki et kalınlıkları</strong>, ısı
                genleşmesiyle birlikte çerçeve bozulmasına yol açar. Fenetre Systems bu değeri
                sektör minimumunun üzerinde tutar.
              </p>
              <p>
                Toz boya uygulaması <u>elektrostatik yöntemle</u> gerçekleştirilir. Fırın sıcaklığı
                ve süre belirli bir standartta sabit tutulur. Sonuç: düzgün, homojen ve çizilmeye
                dayanıklı bir yüzey. Tuzlu hava ve yüksek nem koşullarında bile renk kalıcı kalır.
              </p>

              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-bold text-brand mb-4 text-sm uppercase tracking-wide">
                  Üretim Süreç Parametreleri
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-primary-light">
                        <th className="text-left py-2 pr-4 font-semibold text-brand">Parametre</th>
                        <th className="text-left py-2 px-4 font-semibold text-brand">Değer</th>
                        <th className="text-left py-2 px-4 font-semibold text-brand">Önemi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['Profil et kalınlığı', '≥ 1,2 mm', 'Isı genleşmesine direnç'],
                        ['Kesim toleransı', '± 0,5 mm', 'Boşluksuz oturum'],
                        ['File UV ömrü', '10+ yıl', 'Renk ve esneklik korunur'],
                        ['Boya fırın sıcaklığı', '180–200 °C', 'Homojen yüzey'],
                        ['Profil uzunluk stoku', '6 m çubuk', 'Fire minimize edilir'],
                      ].map(([param, deger, onem]) => (
                        <tr key={param} className="hover:bg-gray-50">
                          <td className="py-2.5 pr-4 font-medium text-gray-700">{param}</td>
                          <td className="py-2.5 px-4 text-primary font-semibold">{deger}</td>
                          <td className="py-2.5 px-4 text-gray-500 text-xs">{onem}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.title}
                  className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: '#edf7ec' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#83bd81' }} />
                  </div>
                  <h3 className="font-bold text-brand text-sm mb-2">{cap.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
