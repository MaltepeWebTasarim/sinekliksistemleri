import { CheckCircle } from 'lucide-react'

const materials = [
  {
    name: 'Alüminyum Profil',
    spec: 'ET kalınlığı ≥ 1,2 mm',
    color: '#83bd81',
    desc: 'Sineklik sistemlerinin omurgasını alüminyum profil oluşturur. Düşük et kalınlıklı profillerde güneş ısısı ve yükleme altında bükülme gözlemlenir. Fenetre Systems, sektör standardının üzerinde et kalınlığı kullanır. Elektrostatik toz boya uygulamasıyla yüzey pürüzsüzlüğü ve renk kalıcılığı garanti altına alınır.',
    properties: [
      'ET kalınlığı ≥ 1,2 mm — Isı genleşmesine direnç',
      'Elektrostatik toz boya — Renk kalıcılığı',
      '180–200 °C fırın uygulaması — Homojen kaplama',
      'Korozyon dayanımı — Tuzlu havaya karşı koruma',
      '6 m çubuk stoğu — Minimum fire kesim',
    ],
  },
  {
    name: 'Fiberglas File',
    spec: 'UV dayanımı 10+ yıl',
    color: '#404e5e',
    desc: 'File seçimi, sineklik sistemlerinde uzun vadeli memnuniyetin en kritik değişkenidir. Düşük kaliteli file iki-üç yaz içinde gevşer, rengi solar, çerçeveden çıkar. Fenetre Systems tarafından kullanılan fiberglas file, UV dayanım testinden geçmiş, belgeli hammaddeden üretilir.',
    properties: [
      '18×16 mesh — Standart sineklik için optimum gözeneklilik',
      'UV stabilize kaplama — Renk ve esneklik korunur',
      'Termal bağ — Isıya dayanıklı çapraz örgü',
      'Antistatik yüzey — Toz tutma direnci',
      'PVC kaplı fiberglas — Çerçeve tutunma gücü',
    ],
  },
  {
    name: 'Plise File Malzemesi',
    spec: 'Katlama dayanımı 30.000+ açılış',
    color: '#6aad68',
    desc: 'Plise sineklikte file, akordiyon kıvrımlarına binlerce kez maruz kalır. Bu döngülere dayanamayan file malzemesi katlama çizgilerinde çatlar. Fenetre Systems plise sistemlerinde polyester bazlı, ısıl şekillendirilmiş özel file kullanır.',
    properties: [
      '30.000+ katlama döngüsü dayanımı',
      'Isıl şekillendirilmiş polyester bazlı file',
      'Katlama çizgisi gerilim dayanımı',
      'Dar gözenekli örgü — Küçük böcek bariyeri',
      'Sabit katlama geometrisi — Estetik korunur',
    ],
  },
  {
    name: 'Fırçalar ve Contalar',
    spec: 'Kıl uzunluğu kalibreli',
    color: '#5a6d82',
    desc: 'Sürgülü sineklik sistemlerinde panel ile çerçeve arasındaki geçişi kapatan fırça contalar, sızıntı önleminin son halkasıdır. Kıl uzunluğu yetersiz olan fırçalar hava akımını tam engelleyemez. Fenetre Systems kalibre edilmiş kıl uzunluğunda fırça kullanır.',
    properties: [
      'Kalibre edilmiş kıl uzunluğu',
      'Böcek ve toz geçişi engeli',
      'Nem ve çarpılmaya dayanıklı tutucu',
      'Yedek fırça temin edilebilir',
    ],
  },
]

export default function MaterialQuality() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-flex">Malzeme Kalitesi</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mb-5">
            Ürün Kalitesi: Malzeme Seçimi{' '}
            <span style={{ color: '#83bd81' }}>Her Şeyi Belirler</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sineklik sistemlerinde fiyat farkının büyük çoğunluğu görünmeyen yerde gizlidir:
            profil et kalınlığında, file UV dayanımında, fırça kıl uzunluğunda.{' '}
            <a href="/" className="text-primary hover:underline font-semibold">
              Plise sineklik
            </a>{' '}
            başta olmak üzere tüm modellerde Fenetre Systems belgeli malzeme kullanır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {materials.map((mat) => (
            <article
              key={mat.name}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: mat.color }}
                />
                <h3 className="font-bold text-brand text-base">{mat.name}</h3>
                <span
                  className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: mat.color + '15', color: mat.color }}
                >
                  {mat.spec}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">{mat.desc}</p>

              <ul className="space-y-1.5">
                {mat.properties.map((prop) => (
                  <li key={prop} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    {prop}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
          <h3 className="text-lg font-bold text-brand mb-5">
            Malzeme Kalite Karşılaştırması
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-light">
                  <th className="text-left py-3 px-4 font-semibold text-brand">Malzeme</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand">Fenetre Systems</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand">Standart Piyasa</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand">Fark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ['Profil ET kalınlığı', '≥ 1,2 mm', '0,8–1,0 mm', 'Bükülme direnci yüksek'],
                  ['File UV ömrü', '10+ yıl', '3–5 yıl', 'Uzun ömürlü renk ve esneklik'],
                  ['Boya uygulaması', 'Elektrostatik + fırın', 'Sprey veya belirsiz', 'Homojen ve dayanıklı yüzey'],
                  ['Plise file döngüsü', '30.000+ katlama', '5.000–10.000', 'Katlama çizgisi çatlamaz'],
                  ['Belgelendirme', 'TSE + üretici belgesi', 'Sertifikasız', 'İzlenebilir hammadde'],
                  ['Profil renk seçeneği', '10+ renk', '3–5 renk', 'Mimari uyum esnekliği'],
                ].map(([mal, fenetre, piyasa, fark]) => (
                  <tr key={mal} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">{mal}</td>
                    <td className="py-3 px-4 font-semibold" style={{ color: '#83bd81' }}>
                      {fenetre}
                    </td>
                    <td className="py-3 px-4 text-gray-400">{piyasa}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{fark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'TSE Belgeli Alüminyum', desc: 'Hammadde kaynağı izlenebilir' },
              { label: 'UV Dayanım Belgesi', desc: '10+ yıl renk ve esneklik garantisi' },
              { label: 'Kalite Kontrol Kaydı', desc: 'Her ürün sevkiyat öncesi belgelenir' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4 border border-green-100 text-center"
                style={{ backgroundColor: '#edf7ec' }}
              >
                <div className="font-semibold text-brand text-sm mb-1">{item.label}</div>
                <div className="text-xs text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
