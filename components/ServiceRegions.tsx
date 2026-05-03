const regions = [
  {
    name: 'Marmara Bölgesi',
    cities: 'İstanbul, Bursa, Kocaeli, Sakarya, Tekirdağ, Yalova, Bilecik, Edirne, Kırklareli',
    climate: 'Dört mevsim belirgin. Yaz aylarında böcek yoğunluğu yüksek. Kıyı kesimlerinde tuzlu nem.',
    demand: 'Çok Yüksek',
    demandColor: '#83bd81',
    highlight: "Türkiye'nin en kalabalık bölgesi. Hem konut hem ticari uygulama yoğunluğu en üst düzeyde.",
    topProducts: ['Plise sineklik', 'Duble sürgülü', 'Jaluzi perde'],
  },
  {
    name: 'Ege Bölgesi',
    cities: 'İzmir, Aydın, Muğla, Manisa, Denizli, Afyonkarahisar, Kütahya, Uşak',
    climate: 'Akdeniz iklimi hâkimdir. Sıcak yaz, ılık kış. Sivrisinek mevsimi uzundur.',
    demand: 'Yüksek',
    demandColor: '#83bd81',
    highlight: 'Yazlık ve tatil mülklerinin yoğunlaştığı bölge. Muğla ve Aydın kıyılarında talep pik yapar.',
    topProducts: ['Eşiksiz sineklik', 'Zip perde', 'Honeycomb perde'],
  },
  {
    name: 'Akdeniz Bölgesi',
    cities: 'Antalya, Mersin, Adana, Hatay, Kahramanmaraş, Burdur, Isparta, Osmaniye',
    climate: 'Uzun ve sıcak yaz. Böcek baskısı Türkiye genelinin en yüksek seviyesinde.',
    demand: 'Çok Yüksek',
    demandColor: '#83bd81',
    highlight: 'Yaz boyunca 40°C aşan sıcaklıklar doğal havalandırmayı zorunlu kılar. Sineklik olmadan pencere açmak güçtür.',
    topProducts: ['Sabit sineklik', 'Plise sineklik', 'Zip perde'],
  },
  {
    name: 'İç Anadolu Bölgesi',
    cities: 'Ankara, Konya, Kayseri, Sivas, Yozgat, Eskişehir, Aksaray, Niğde, Nevşehir, Çorum, Kırşehir, Karaman, Kırıkkale',
    climate: 'Karasal iklim. Kurak yaz. Sivrisinek tarım alanlarında yoğun.',
    demand: 'Orta-Yüksek',
    demandColor: '#6aad68',
    highlight: 'Başkent Ankara ve Konya gibi büyük şehir merkezleri güçlü talep taşır. Tarım bölgelerinde ise böcek baskısı yüksektir.',
    topProducts: ['Duble sineklik', 'Düet perde', 'Sabit sineklik'],
  },
  {
    name: 'Karadeniz Bölgesi',
    cities: 'Trabzon, Samsun, Giresun, Rize, Ordu, Artvin, Bayburt, Gümüşhane, Sinop, Bartın, Kastamonu, Zonguldak, Bolu, Düzce',
    climate: 'Nemli ve yağışlı. Nem kaynaklı böcek türleri yoğun. Uzun ilkbahar-yaz dönemi.',
    demand: 'Orta',
    demandColor: '#5a6d82',
    highlight: 'Yüksek nem oranı korozyon riskini artırır. Toz boyalı alüminyum profil burada daha kritik bir tercih olur.',
    topProducts: ['Sabit sineklik', 'Tek kanat sineklik', 'Plise perde'],
  },
  {
    name: 'Doğu Anadolu Bölgesi',
    cities: 'Erzurum, Van, Malatya, Elazığ, Erzincan, Ağrı, Kars, Muş, Ardahan, Iğdır, Bingöl, Bitlis, Tunceli, Hakkari',
    climate: 'Sert kış, kısa yaz. Yaz aylarında böcek yoğunluğu ani artar.',
    demand: 'Düşük-Orta',
    demandColor: '#8899aa',
    highlight: "Kısa ama yoğun yaz aylarında sineklik talebi ani yükseliş gösterir. Demonte kargo ulaşımı her noktaya sağlanır.",
    topProducts: ['Sabit sineklik', 'Tek kanat sineklik'],
  },
  {
    name: 'Güneydoğu Anadolu Bölgesi',
    cities: 'Gaziantep, Diyarbakır, Şanlıurfa, Adıyaman, Batman, Mardin, Siirt, Şırnak, Kilis',
    climate: 'Çok sıcak ve kurak yaz. Yüksek böcek baskısı. Pencere havalandırması zorunlu.',
    demand: 'Yüksek',
    demandColor: '#83bd81',
    highlight: "Şanlıurfa ve Diyarbakır'da yaz sıcaklıkları 45°C'ye ulaşır. Doğal havalandırma için sineklik hayati önem taşır.",
    topProducts: ['Sabit sineklik', 'Duble sineklik', 'Plise sineklik'],
  },
]

const demandToWidth: Record<string, string> = {
  'Çok Yüksek': 'w-full',
  Yüksek: 'w-4/5',
  'Orta-Yüksek': 'w-3/5',
  Orta: 'w-2/5',
  'Düşük-Orta': 'w-1/4',
}

export default function ServiceRegions() {
  return (
    <section id="bolgeler" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-flex">Hizmet Bölgeleri</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mb-5">
            Türkiye&apos;nin 7 Coğrafi Bölgesinde{' '}
            <span style={{ color: '#83bd81' }}>Kapsamlı Hizmet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Her bölgenin iklimi, böcek yoğunluğu ve konut yapısı farklıdır. Fenetre Systems bu
            farklılıkları göz önünde tutarak{' '}
            <a href="/" className="text-primary hover:underline font-semibold">
              sineklik fiyatları
            </a>{' '}
            ve ürün seçimi konusunda bölgeye özel rehberlik sunar. 81 ilin her adresine demonte
            teslimat ve montaj garantisi geçerlidir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {regions.map((region) => (
            <article
              key={region.name}
              className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-brand text-base">{region.name}</h3>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: region.demandColor + '20', color: region.demandColor }}
                >
                  {region.demand}
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-2">
                <span className="font-semibold text-gray-600">İller: </span>
                {region.cities}
              </p>

              <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">İklim: </span>
                  {region.climate}
                </p>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-3">{region.highlight}</p>

              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Talep Yoğunluğu</span>
                  <span className="font-medium">{region.demand}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full">
                  <div
                    className={`h-full rounded-full ${demandToWidth[region.demand]}`}
                    style={{ backgroundColor: region.demandColor }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {region.topProducts.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-2 py-0.5 rounded-md font-medium"
                    style={{ backgroundColor: '#edf7ec', color: '#404e5e' }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
          <h3 className="text-lg font-bold text-brand mb-5">Bölge Bazlı Pazar Özeti</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-light">
                  <th className="text-left py-3 px-4 font-semibold text-brand">Bölge</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand">İklim Tipi</th>
                  <th className="text-center py-3 px-4 font-semibold text-brand">Talep</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand">Öne Çıkan Ürün</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {regions.map((r) => (
                  <tr key={r.name} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-brand">{r.name}</td>
                    <td className="py-3 px-4 text-gray-600">{r.climate.split('.')[0]}</td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: r.demandColor + '20', color: r.demandColor }}
                      >
                        {r.demand}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{r.topProducts[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
