import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Murat K.',
    city: 'İstanbul',
    role: 'Villa Sahibi',
    text: 'Balkon kapısına eşiksiz sineklik taktırdım. Ölçü verirken tereddüt ettim ama talimatları takip edince sorunsuz çıktı. Montajcı geldi, bir saatte bitti. Görünüm beklediğimden çok daha iyi.',
    stars: 5,
  },
  {
    name: 'Ayşe D.',
    city: 'İzmir',
    role: 'Apartman Dairesi',
    text: 'Yazlık evimin tüm pencerelerine duble sineklik yaptırdım. Kargoda hiçbir hasar yoktu, paketleme gerçekten özenli. Sivrisinek sorunu sıfırlandı. Fiyat kalite dengesi beklentimin üzerinde.',
    stars: 5,
  },
  {
    name: 'Cengiz Ö.',
    city: 'Ankara',
    role: 'Ofis Yöneticisi',
    text: 'Çalışma ortamımıza jaluzi perde ve sabit sineklik birlikte uygulandı. Hem ışık kontrolü hem hava kalitesi arttı. Toplu sipariş için ayrı fiyat verilmesi de memnun etti.',
    stars: 5,
  },
  {
    name: 'Fatma B.',
    city: 'Antalya',
    role: 'Tatil Evi Sahibi',
    text: 'Sahil yazlığıma teras kapısına eşiksiz sineklik, pergolaya zip perde yaptırdım. Tuzlu deniz havasında şimdiye kadar hiç sorun çıkmadı. WhatsApp desteği her soruda hızlı yanıt verdi.',
    stars: 5,
  },
]

const metrics = [
  { value: '50.000+', label: 'Başarılı Uygulama', desc: '15 yılda gerçekleştirilen montaj sayısı' },
  { value: '%98', label: 'Memnuniyet Oranı', desc: 'Teslim sonrası müşteri geri bildirimine göre' },
  { value: '81', label: 'İl Kapsamı', desc: "Türkiye'nin her iline demonte teslimat" },
  { value: '2 Yıl', label: 'Üretici Garantisi', desc: 'Malzeme ve işçilik hatalarına karşı' },
]

export default function TrustProofs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-flex">Güven Kanıtları</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mb-5">
            Müşterilerimiz Ne Söylüyor?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            50.000&apos;i aşkın uygulama deneyimi. Her geri bildirim, bir sonraki ürünü daha iyi
            yapmak için değerlendirilir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #83bd81, #404e5e)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-brand">{t.name}</div>
                  <div className="text-xs text-gray-500">
                    {t.city} — {t.role}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <Quote className="w-6 h-6 text-primary-mid flex-shrink-0" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-6 text-center border border-green-100"
              style={{ background: 'linear-gradient(135deg, #edf7ec, #ffffff)' }}
            >
              <div className="text-3xl font-black mb-1" style={{ color: '#83bd81' }}>
                {m.value}
              </div>
              <div className="font-semibold text-brand text-sm mb-1">{m.label}</div>
              <div className="text-xs text-gray-500 leading-tight">{m.desc}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
          <h3 className="text-lg font-bold text-brand mb-5">Neden Fenetre Systems&apos;e Güvenilir?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Şeffaf Fiyatlandırma', desc: 'Teklif aşamasında tüm maliyetler açıklanır. Sürpriz fatura yoktur.' },
              { title: 'Kayıt Altında Üretim', desc: 'Her sipariş, ölçüden teslimata kadar dijital olarak takip edilir.' },
              { title: 'Hata Anında Çözüm', desc: 'Üretimden kaynaklanan herhangi bir hata, ücretsiz olarak yeniden üretilir.' },
              { title: 'Bölge Ekibi Garantisi', desc: 'Montaj, eğitimli ve sahada deneyimli teknik personel tarafından yapılır.' },
              { title: 'Yerli Üretim Güvencesi', desc: "Gebze'deki tesiste yerli üretim. Kaynak takip edilebilir, kalite belgelidir." },
              { title: 'WhatsApp Destek', desc: 'Sipariş öncesinden montaj sonrasına kadar her aşamada erişilebilir destek.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-100">
                <h4 className="font-semibold text-brand text-sm mb-1.5">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
