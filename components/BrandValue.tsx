import { CheckCircle, Award, Truck, Wrench, Shield, Users } from 'lucide-react'

const differentiators = [
  {
    icon: Award,
    title: 'Sertifikalı Hammadde',
    desc: 'TSE ve Avrupa normlarına uygun alüminyum profil ile belgelenmiş UV dayanımlı fiberglas file.',
  },
  {
    icon: Truck,
    title: '81 İle Demonte Teslimat',
    desc: "Türkiye'nin her adresine kargo güvencesiyle ulaşır. Çift katmanlı koruyucu paketleme uygulanır.",
  },
  {
    icon: Wrench,
    title: 'Yerinde Montaj Garantisi',
    desc: 'Bölge ekibimiz teslimat sonrasında kurulumu gerçekleştirir, sonucu müşteri onaylar.',
  },
  {
    icon: Shield,
    title: '2 Yıl Üretici Garantisi',
    desc: 'Malzeme ve işçilik hatalarına karşı üretici garantisi. Yedek parça ücretsiz karşılanır.',
  },
  {
    icon: Users,
    title: 'Özel Ölçü Üretim',
    desc: 'Raf ürünü yok. Her sipariş, müşterinin ilettiği ölçüye göre ayrı ayrı üretilir.',
  },
  {
    icon: CheckCircle,
    title: 'Sevkiyat Öncesi Kontrol',
    desc: 'Boyut, profil hizalama ve file gerginliği; her ürün sevk edilmeden önce ayrı ayrı kontrol edilir.',
  },
]

const stats = [
  { value: '15+', label: 'Yıl Deneyim', sub: 'Sektörde Aktif' },
  { value: '50K+', label: 'Uygulama', sub: 'Türkiye Geneli' },
  { value: '81', label: 'İl', sub: 'Teslimat Kapsamı' },
  { value: '2 Yıl', label: 'Garanti', sub: 'Üretici Güvencesi' },
]

export default function BrandValue() {
  return (
    <section id="hakkimizda" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">
          <div>
            <span className="badge mb-4 inline-flex">Marka Değeri</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand mb-6 leading-tight">
              Türkiye&apos;nin Lider{' '}
              <a href="/" className="text-primary hover:underline decoration-primary decoration-2">
                Sineklik Firmaları
              </a>{' '}
              Arasında: Fenetre Systems
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed mb-8 text-[15px]">
              <p>
                Fenetre Systems, Gebze&apos;deki üretim tesisinden hareketle{' '}
                <strong className="text-brand">Türkiye&apos;nin 81 iline</strong> sineklik ve perde sistemleri gönderir.
                Aracı firma yok. Bayi zinciri yok. Sipariş alınır, ölçüye göre üretilir, kargoya verilir, monte edilir.
              </p>
              <p>
                Piyasada birçok ürün, kaynağı belirsiz profil ve ithal file ile üretilir.{' '}
                <strong className="text-brand">Fenetre Systems bu yaklaşımı reddeder.</strong> TSE testli alüminyum
                ve <u>belgelenmiş UV dayanımlı fiberglas</u>; fiyat değil kalite önceliğini gösterir.
              </p>
              <p>
                Türkiye&apos;de{' '}
                <a href="/" className="text-primary hover:underline font-semibold">
                  sineklik sistemleri
                </a>{' '}
                sektörü hız ve hacimle büyürken teknik derinlik ikinci sıraya düşüyor. Fenetre Systems bu trendin
                tersini seçti; büyümeyi kaliteden taviz vererek değil,{' '}
                <em>üretim kapasitesini artırarak</em> sağladı.
              </p>
              <p>
                Ölçü toleransı sıfıra yakın tutulur. Profil kesim hassasiyeti ±0,5 mm altında kalır.
                File gerginliği standartlaştırılmış bir gerilim değerine göre ayarlanır. Bu ayrıntılar
                teslimat sonrasında boşluk veya sızıntı şikâyetinin neden yaşanmadığını açıklar.
              </p>
            </div>

            <ul className="space-y-2.5 mb-8">
              {[
                'Sipariş bazlı özel ölçü üretim, standart raf ürün yok',
                'TSE ve Avrupa normlarına uygun hammadde kullanımı',
                'Çift katmanlı hasar önleyici paketleme sistemi',
                'Bölge ekibiyle yerinde montaj, müşteri onayı alınır',
                '2 yıl üretici garantisi, ücretsiz yedek parça',
                'WhatsApp üzerinden 7/24 teknik destek hattı',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-light">
                    <th className="text-left py-3 px-4 font-semibold text-brand">Kriter</th>
                    <th className="text-center py-3 px-4 font-semibold text-brand">Fenetre Systems</th>
                    <th className="text-center py-3 px-4 font-semibold text-brand">Piyasa Ortalaması</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[
                    ['Üretim Lokasyonu', 'Gebze / Kocaeli – TR', 'Belirsiz / İthal'],
                    ['Malzeme Belgelendirme', 'TSE + Avrupa normu', 'Sertifikasız'],
                    ['Ölçü Yaklaşımı', 'Özel sipariş bazlı', 'Standart raf ürün'],
                    ['Garanti Süresi', '2 yıl üretici garantisi', '6 ay – 1 yıl'],
                    ['Montaj', 'Dahil, bölge ekibi', 'Ek ücretli veya yok'],
                    ['Teslimat', '81 ile kargo + montaj', 'Sınırlı bölge'],
                  ].map(([kriter, fenetre, piyasa]) => (
                    <tr key={kriter} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-700">{kriter}</td>
                      <td className="py-3 px-4 text-center font-semibold" style={{ color: '#83bd81' }}>
                        {fenetre}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-400">{piyasa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-7">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 border border-green-100 text-center"
                  style={{ background: 'linear-gradient(135deg, #edf7ec, #ffffff)' }}
                >
                  <div className="text-3xl font-black mb-1" style={{ color: '#83bd81' }}>
                    {s.value}
                  </div>
                  <div className="font-semibold text-brand text-sm">{s.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {differentiators.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 hover:bg-primary-light transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand text-sm mb-1">{d.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
