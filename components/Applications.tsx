import { Home, Sun, Building2, School, Hotel } from 'lucide-react'

const applications = [
  {
    icon: Home,
    title: 'Konut ve Daire Uygulamaları',
    badge: 'En Yaygın',
    desc: `Apartman daireleri ve müstakil konutlarda sineklik sistemi seçimi, pencere tipi ve açılış yönüne göre belirlenir. Geniş balkon kapıları için <a href="/" class="text-primary hover:underline font-semibold">kapı sinekliği</a> modelleri öne çıkar. Dar pencereler sabit veya tek kanatlı sürgülü sineklikle çözülür. Güneşe bakan oda pencereleri için düet veya honeycomb perde kombinasyonu tercih edilir; hem ışık hem mahremiyeti dengede tutar.`,
    points: [
      'Balkon kapılarında eşiksiz veya çift kanatlı sineklik',
      'Yatak odası pencereleri için plise sineklik',
      'Oturma odası için düet perde ve sabit sineklik kombinasyonu',
      'Mutfak için duble sürgülü sineklik',
    ],
  },
  {
    icon: Sun,
    title: 'Yazlık ve Tatil Evleri',
    badge: 'Mevsimlik Yoğun',
    desc: `Akdeniz, Ege ve Marmara sahil şeridindeki yazlık evler, yaz mevsiminde sivrisinek yoğunluğunun en yüksek olduğu bölgelerde yer alır. Bu ortamlarda tuzlu ve nemli hava koşulları, alüminyum yüzey kalitesini doğrudan etkiler. <a href="/" class="text-primary hover:underline font-semibold">Eşiksiz sineklik</a> modeli, zemine yakın kapılar için terasa geçişi kesintisiz sağlar. Zip perde ise teras ve pergola üzerinde dış mekân konforunu artırır.`,
    points: [
      'Sahil ikliminde tuzlu havaya dayanıklı profil',
      'Geniş teras kapılarına eşiksiz veya plise sineklik',
      'Pergola ve verandaya zip perde',
      'Sürgülü geniş pencereler için duble sineklik',
    ],
  },
  {
    icon: Building2,
    title: 'Ticari ve Ofis Mekânları',
    badge: 'Profesyonel Çözüm',
    desc: `Ofis ortamlarında estetik bütünlük ve ışık kontrolü birincil kriter olur. Jaluzi perde, açı ayarlanabilir kanatçıklarıyla ekran yansımasını azaltır, doğal ışığı içeride tutar. Cam cephe sistemlerine entegre plise veya düet perde, modern ofis mimarisine uyum sağlar. Kafe, restoran ve perakende mekânlarında honeycomb perde enerji tüketimini düşürürken estetik değer katır.`,
    points: [
      'Ofis pencerelerine jaluzi veya düet perde',
      'Cam cephelere entegre plise sistemler',
      'Restoran ve kafe terası için zip perde',
      'Mağaza vitrini için özel ölçü sineklik',
    ],
  },
  {
    icon: School,
    title: 'Kamu Binaları ve Kurumlar',
    badge: 'Toplu Proje',
    desc: `Okul, sağlık merkezi, idari bina gibi kamu yapılarında sineklik ve perde sistemleri toplu olarak temin edilir. Fenetre Systems, toplu sipariş projelerinde özel fiyatlandırma ve üretim planlaması sunar. Uzun bölme pencerelere sahip kurumsal yapılarda duble sürgülü sineklik en pratik tercih olarak öne çıkar. Hastane odaları için antibakteriyal özellikli file seçeneği mevcuttur.`,
    points: [
      'Toplu sipariş için özel fiyatlandırma',
      'Uzun pencere sıralarına duble sürgülü sineklik',
      'Proje bazlı üretim ve teslimat planlaması',
      'Hastane için özel file seçenekleri',
    ],
  },
  {
    icon: Hotel,
    title: 'Otel ve Konaklama Tesisleri',
    badge: 'Premium Görünüm',
    desc: `Konaklama tesislerinde misafir memnuniyeti doğrudan konu aydınlatmasıyla, hava kalitesiyle ve böcek kontrolüyle bağlantılıdır. Plise sineklik görsel kirliliği minimuma indirir; honeycomb perde oda sıcaklığını dengeler. Büyük balkon açıklıklarına yerleştirilen zip perde, rüzgar ve güneş kontrolünü bir arada sunar. Otel projelerinde montaj ekibimiz önceden belirlenen takvime göre çalışır; operasyon aksatılmaz.`,
    points: [
      'Otel odası pencerelerine plise sineklik',
      'Balkonlara zip veya honeycomb perde',
      'Takvim bazlı proje montajı',
      'Görsel bütünlüğe uygun renk seçenekleri',
    ],
  },
]

export default function Applications() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-flex">Uygulama Alanları</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mb-5">
            Her Mekâna Özel Çözüm:{' '}
            <span style={{ color: '#83bd81' }}>Uygulama Örnekleri</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Konuttan otele, ofisten tatil köyüne uzanan uygulama deneyimi. Her mekânın kendine özgü
            gereksinimi; doğru modelin seçimi fark yaratır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {applications.map((app) => {
            const Icon = app.icon
            return (
              <article
                key={app.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#edf7ec' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#83bd81' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-brand text-base">{app.title}</h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary-light text-primary-dark">
                        {app.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: app.desc }}
                />

                <ul className="space-y-1.5">
                  {app.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-gray-600">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                        style={{ backgroundColor: '#83bd81', fontSize: '9px' }}
                      >
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="bg-brand rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black mb-1" style={{ color: '#83bd81' }}>5+</div>
              <div className="text-sm font-medium">Farklı Uygulama Kategorisi</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1" style={{ color: '#83bd81' }}>81</div>
              <div className="text-sm font-medium">İl Kapsamı</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1" style={{ color: '#83bd81' }}>%100</div>
              <div className="text-sm font-medium">Montaj Garantisi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
