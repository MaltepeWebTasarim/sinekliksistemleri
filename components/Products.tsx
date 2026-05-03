import { CheckCircle, Layers, Square, Columns, ArrowLeftRight, Minus, AlignJustify, Grid, Wind } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Product {
  icon: LucideIcon
  name: string
  slug: string
  badge?: string
  desc: string
  features: string[]
  iconBg: string
  iconColor: string
}

const sineklikler: Product[] = [
  {
    icon: Square,
    name: 'Sabit Sineklik',
    slug: 'sabit-sineklik',
    badge: 'En Ekonomik',
    iconBg: '#edf7ec',
    iconColor: '#83bd81',
    desc: 'Alüminyum profil çerçevesine kalıcı olarak yerleştirilen fiberglas file, pencere açıklığını böceksiz hâle getirir. Hiçbir mekanizma barındırmaz; bu sadelik bakımı basitleştirir. Yıllarca şekil tutmaz, renk atmaz.',
    features: ['UV dayanımlı fiberglas file', 'Elektrostatik toz boyalı profil', 'Kolay kurulum', 'Yedek parça gerektirmez'],
  },
  {
    icon: Columns,
    name: 'Duble Sineklik',
    slug: 'duble-sineklik',
    iconBg: '#edf7ec',
    iconColor: '#83bd81',
    desc: 'İki bağımsız panel birbirinden ayrı yana kayar; pencere açıklığının yarısını ya da tamamını kullanıcı kontrolüne bırakır. Sürgülü pencere sistemleriyle sıfır boşluklu uyum sağlar. Geniş açıklıklarda hava yönetimini farklılaştırır.',
    features: ['Çift bağımsız sürgülü panel', 'Her iki yönden havalandırma', 'Sürgülü pencere uyumlu', 'Pürüzsüz alüminyum ray'],
  },
  {
    icon: ArrowLeftRight,
    name: 'Tek Kanat Sineklik',
    slug: 'tek-kanat-sineklik',
    iconBg: '#edf7ec',
    iconColor: '#83bd81',
    desc: 'Standart pencere genişlikleri için en yaygın ve pratik çözüm. Tek sürgülü panel yana çekilerek açıklığı tamamen serbest bırakır. Kurulumu kısa sürer.',
    features: ['Tek sürgülü panel', 'Hızlı montaj', 'Kompakt çerçeve', 'Standart ölçü uyumu'],
  },
  {
    icon: Columns,
    name: 'Çift Kanat Sineklik',
    slug: 'cift-kanat-sineklik',
    iconBg: '#edf7ec',
    iconColor: '#83bd81',
    desc: 'Birbirinden bağımsız iki kanat her iki yana çekilerek büyük açıklıkları örter. Mıknatıslı kilitleme sistemi kanatların istem dışı açılmasını önler. Kapı genişliğindeki çerçevelerde tercih farkı yaratır.',
    features: ['İki yönlü açılış kapanış', 'Mıknatıslı kilitleme', 'Geniş kapı uyumlu', 'Sağlam vida bağlantısı'],
  },
  {
    icon: Minus,
    name: 'Eşiksiz Sineklik',
    slug: 'esiksiz-sineklik',
    badge: 'Engelsiz Erişim',
    iconBg: '#edf7ec',
    iconColor: '#83bd81',
    desc: 'Zemin ile sineklik çerçevesi arasında hiçbir eşik tümsek yoktur. Tekerlekli sandalye, bebek arabası ve yaşlılar için engel oluşturmaz. Balkon ile teras kapılarının ilk tercihidir.',
    features: ['Alt bariyer tamamen yok', 'Erişilebilirlik uyumlu', 'Balkon ve teras için özel', 'Tek/çift kanat seçenek'],
  },
  {
    icon: Layers,
    name: 'Plise Sineklik',
    slug: 'plise-sineklik',
    badge: 'Estetik Öncelik',
    iconBg: '#edf7ec',
    iconColor: '#83bd81',
    desc: 'Akordiyon gibi katlanıp açılan file yapısı, kapalıyken pencere kenarında neredeyse kaybolur. Çift kanatlı versiyonu kapı açıklığının tamamını güvenle örter. Estetik açıdan hassas mekânlarda görsel bütünlüğü bozmaz.',
    features: ['Katlanan kompakt yapı', 'Çift kanatlı seçenek', 'Geniş açıklık uyumu', 'Minimum görsel iz'],
  },
]

const perdeler: Product[] = [
  {
    icon: Layers,
    name: 'Plise Perde',
    slug: 'plise-perde',
    iconBg: '#eef2f7',
    iconColor: '#404e5e',
    desc: 'Petek benzeri katmanlı dokuma yapısı ışığı yumuşatır; sert yansımaları filtreler. Farklı opaklık seçenekleri hem gündüz hem gece kullanımına hizmet eder. Kaseti pencere çerçevesinde kaybolur.',
    features: ['Çoklu opaklık seçeneği', 'Isı düzenleyici petek dokuma', 'Kompakt rulolu kaseti', 'İç mekân ısı dengesi'],
  },
  {
    icon: AlignJustify,
    name: 'Jaluzi Perde',
    slug: 'jaluzi-perde',
    iconBg: '#eef2f7',
    iconColor: '#404e5e',
    desc: 'Yatay kanatçıkların açı ayarı içeri giren gün ışığını kullanıcı isteğine göre şekillendirir. Alüminyum kanatçıklar nem ve toza dayanıklıdır; ahşap seçenek sıcak mekan estetiğini tamamlar. Ofislerde karşıdan bakışı engeller.',
    features: ['Ayarlanabilir kanatçık açısı', 'Alüminyum ve ahşap seçenek', 'Yüksek mahremiyet', 'Uzun ömürlü mekanizma'],
  },
  {
    icon: Columns,
    name: 'Düet Perde',
    slug: 'duet-perde',
    badge: 'Çift Görünüm',
    iconBg: '#eef2f7',
    iconColor: '#404e5e',
    desc: 'Şeffaf şeritlerle opak şeritler aynı ruloya sarılı; kullanıcı kaydırarak aralarında geçiş yapar. Gündüz dışarıyı görmek ya da gece mahremiyeti sağlamak birkaç saniye içinde mümkün olur. Modern konutların değişken ışık gereksinimlerine yanıt verir.',
    features: ['Şeffaf ve opak şerit sistemi', 'İki görünüm arası geçiş', 'Modern estetik', 'Kolay kullanım mekanizması'],
  },
  {
    icon: Grid,
    name: 'Honeycomb Perde',
    slug: 'honeycomb-perde',
    badge: 'Enerji Tasarrufu',
    iconBg: '#eef2f7',
    iconColor: '#404e5e',
    desc: 'Altıgen petek hücrelerin içindeki hareketsiz hava katmanı, pencereden gelen soğuk veya sıcak transferini yavaşlatır. Isı köprüsünü kesen bu yapı klima ve ısıtma giderlerinde doğrudan fark yaratır. Tek ve çift katlı hücre seçeneğine göre yalıtım performansı değişir.',
    features: ['Altıgen hücre yalıtım yapısı', 'Kış-yaz enerji tasarrufu', 'Tek/çift katlı hücre seçenek', 'Sessiz kullanım'],
  },
  {
    icon: Wind,
    name: 'Zip Perde',
    slug: 'zip-perde',
    badge: 'Dış Mekân',
    iconBg: '#eef2f7',
    iconColor: '#404e5e',
    desc: 'Kumaşın iki yanındaki raylara kilitli fermuarlı bantlar rüzgarda dalgalanmayı sıfırlar. Dış mekân güneş kontrolünde estetik ile işlevsellik bir arada çözülür. Motorlu seçeneğiyle büyük cephe ve teras uygulamalarını da kapsar.',
    features: ['Rüzgar ve yağmur direnci', 'Teras ve pergola uygulaması', '%90 UV blokaj kapasitesi', 'Motorlu seçenek mevcut'],
  },
]

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon
  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: product.iconBg }}
        >
          <Icon className="w-6 h-6" style={{ color: product.iconColor }} />
        </div>
        {product.badge && (
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary-light text-primary-dark">
            {product.badge}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-brand mb-3">{product.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{product.desc}</p>

      <ul className="space-y-2">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Products() {
  return (
    <section id="urunler" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-flex">Ürün Kataloğu</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mb-5">
            Sineklik ve Perde Sistemleri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Her pencere ve kapı açıklığı farklı bir gereksinim taşır.{' '}
            <a href="/" className="text-primary hover:underline font-semibold">
              Sineklik
            </a>{' '}
            modelinden perde sistemine uzanan seçenekler; ölçü, renk ve mekanizma bakımından
            özelleştirilerek kapınıza teslim edilir.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-brand mb-2 flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
              style={{ backgroundColor: '#83bd81' }}
            >
              S
            </span>
            Sineklik Sistemleri
          </h3>
          <p className="text-gray-500 text-sm mb-6 ml-11">
            Böcek, sivrisinek ve toz bariyeri. Havalandırma kesmeden, estetik bozmadan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sineklikler.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-brand mb-2 flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
              style={{ backgroundColor: '#404e5e' }}
            >
              P
            </span>
            Perde Sistemleri
          </h3>
          <p className="text-gray-500 text-sm mb-6 ml-11">
            Işık kontrolü, mahremiyet, ısı yönetimi. Her mekâna özel çözüm.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perdeler.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
          <h3 className="text-lg font-bold text-brand mb-4">
            Ürün Karşılaştırma Tablosu — Sineklik Türleri
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-semibold text-brand">Özellik</th>
                  <th className="py-3 px-4 font-semibold text-brand">Sabit</th>
                  <th className="py-3 px-4 font-semibold text-brand">Duble / Tek Kanat</th>
                  <th className="py-3 px-4 font-semibold text-brand">Plise</th>
                  <th className="py-3 px-4 font-semibold text-brand">Eşiksiz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Açılır kapanır', '✗', '✓', '✓', '✓'],
                  ['Estetik profil', 'Standart', 'Standart', 'Premium', 'Premium'],
                  ['Maliyet', 'Düşük', 'Orta', 'Yüksek', 'Orta'],
                  ['Alt eşik yok', '✗', '✗', '✗', '✓'],
                  ['Geniş açıklık uyumu', 'Orta', 'İyi', 'Çok iyi', 'İyi'],
                  ['Bakım gerektiren parça', 'Yok', 'Az', 'Az', 'Az'],
                ].map(([label, ...cells]) => (
                  <tr key={label} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 font-medium text-gray-700">{label}</td>
                    {cells.map((cell, i) => (
                      <td key={i} className="py-3 px-4 text-gray-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-primary rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-lg mb-1">Hangi modelin sizin için doğru olduğundan emin değil misiniz?</p>
            <p className="text-white/80 text-sm">Teknik ekibimiz pencere türünüze göre en uygun seçeneği belirler.</p>
          </div>
          <a
            href="https://wa.me/905403363873?text=Hangi%20sineklik%20modeli%20uygun%20olur%20merak%20ediyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary-light transition-colors text-sm"
          >
            WhatsApp&apos;tan Danış
          </a>
        </div>
      </div>
    </section>
  )
}
