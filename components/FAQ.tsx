'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Sineklik sistemleri ne kadar süre dayanır?',
    a: 'Fenetre Systems ürünlerinde kullanılan alüminyum profil ve UV dayanımlı fiberglas file kombinasyonu <strong>10–15 yıl sorunsuz hizmet</strong> verir. Profil yüzeyine uygulanan elektrostatik toz boya, tuzlu deniz havasına ve yoğun güneşe karşı renk ile sertlik kaybını önler. File seçimindeki kalite bu süreyi doğrudan belirler; <em>düşük kaliteli file iki-üç yazda gevşer</em>. Fenetre Systems bu riski belgeli hammadde kullanarak ortadan kaldırır.',
  },
  {
    q: 'Sabit sineklik mi yoksa plise sineklik mi tercih edilmeli?',
    a: 'Sabit sineklik yalnızca havalandırma amaçlı kullanılan, açılıp kapanmayan pencereler için idealdir. Maliyet en düşük seçenektir; bakım gerektiren parçası yoktur. <strong>Plise sineklik</strong> ise pencerenin tüm açılış işlevini korur; katlanan yapısıyla estetiği bozmaz. Geniş açıklıklar ve balkon kapıları için plise avantajlıdır. Dar bütçede sabit, <em>görsel öncelikte plise</em> tercih edilebilir.',
  },
  {
    q: 'Eşiksiz sineklik hangi kapılara uygulanır?',
    a: 'Balkon, teras ve bahçeye açılan <u>zemin hizalı kapılara</u> uygulanan bu sistem, alt bariyeri tamamen kaldırır. Tekerlekli sandalye kullanıcıları, yaşlılar ve küçük çocuklar için erişimi engelsiz bırakır. Kapı genişliğine göre tek veya çift kanatlı üretilir. Standart kapı sinekliğinden farklı olarak profil alt ray sistemi kurulmaz; zemin ile çerçeve arası <strong>sıfır boşlukta</strong> kalır.',
  },
  {
    q: "Türkiye'nin tüm illerine montaj yapılıyor mu?",
    a: "Evet. Fenetre Systems ürünleri Türkiye'nin <strong>81 iline demonte hâlde</strong> kargo ağı üzerinden ulaştırılır. Teslimat sonrasında bölge teknik ekibimiz randevu alarak kurulumu yerinde gerçekleştirir. Konut uygulamasında montaj süresi genellikle <em>1–3 saattir</em>. Büyük projeler için proje planlama süreci ayrıca yönetilir.",
  },
  {
    q: 'Plise sineklik nasıl temizlenir?',
    a: 'File yüzeyi <strong>nemli mikrofiber bez</strong> ya da fırçalı el süpürgesiyle kolayca temizlenir. Katlı yapı içindeki toz için ılık sabunlu su ve yumuşak bir fırça kullanılabilir. Baskılı su veya güçlü solventler file dokusunu tahrip eder; kesinlikle önerilmez. Profil çerçevesi ıslak bezle silinebilir. <em>Yıllık bakım</em> sinekliğin ömrünü önemli ölçüde uzatır.',
  },
  {
    q: 'Zip perde dış mekânda güvenle kullanılabilir mi?',
    a: 'Zip perde, yan kanallara kilitli fermuarlı bant tasarımıyla <strong>rüzgar basıncına dayanıklıdır</strong>. Teras, pergola ve yapı cephe uygulamalarında sorunsuz çalışır. Güneş ışınlarını <em>%90\'a varan oranda</em> bloke eden kumaş seçenekleri mevcuttur. Motorlu versiyon büyük cephelerde pratiği artırır. Yağmur altında da yerinden oynamaz; çünkü fermuar sistemi kumaşı ray içine kilitler.',
  },
  {
    q: 'Honeycomb perde enerji tasarrufu sağlar mı?',
    a: 'Honeycomb perdenin altıgen hücre yapısı, pencere camıyla kumaş arasında <u>hareketsiz hava tabakaları</u> oluşturur. Bu tabakalar kışın ısı kaybını yavaşlatır, yazın güneşten kaynaklanan ısı kazanımını frenler. <strong>Çift katlı hücre</strong> seçeneğinde yalıtım performansı tek katlıya göre yaklaşık iki katına çıkar. Enerji verimliliği açısından en etkili perde tipidir.',
  },
  {
    q: 'Özel ölçülerde sineklik üretimi yapılıyor mu?',
    a: 'Fenetre Systems, <strong>standart ölçü dışındaki tüm açıklıklar</strong> için özel ölçü üretim yapar. Raf ürün yoktur. Sipariş öncesinde kullanıcıya ölçüm talimatı iletilir; kolayca uygulanabilir. Ölçüm konusunda emin olunmadığında <em>teknik ekibimiz yerinde ölçüm için randevu alır</em>. Hatalı ölçümden kaynaklanan yeniden üretim ücretsiz karşılanır.',
  },
  {
    q: 'Bayilik almak için ne yapmalıyım?',
    a: '<strong>WhatsApp hattımız üzerinden iletişime geçmeniz</strong> yeterlidir. Bölge, kapasite ve tercih ettiğiniz ürün grubu paylaşıldığında; bayilik koşulları, minimum sipariş miktarı ve bölge münhasırlığı detaylarıyla birlikte iletilir. Fenetre Systems her bölgede <em>seçici bir bayi yapısı</em> kurmayı hedefler; kitlesel değil, nitelikli bir ağ tercih edilir.',
  },
  {
    q: 'Jaluzi perde ile düet perde arasındaki temel fark nedir?',
    a: 'Jaluzi perde, <u>yatay kanatçıkların açı ayarıyla</u> ışık kontrolü sağlar. Tamamen kapatıldığında mahremiyet, kısmen açıldığında doğal aydınlatma elde edilir. Düet perde ise <strong>şeffaf ve opak şeritlerin dönüşümlü hizalanmasıyla</strong> çalışır. İki görünüm arasında yumuşak geçiş yapılır. Jaluzi mekanik kanatçıkla, düet kumaş akışıyla çalışır; bakım gereksinimleri birbirinden farklıdır.',
  },
  {
    q: 'Montaj ne kadar sürer?',
    a: 'Standart konut uygulaması için montaj süresi pencere başına <strong>20–30 dakikadır</strong>. Bir dairenin tüm pencereleri ortalama 1–3 saatte tamamlanır. Büyük proje ve toplu uygulamalarda süre proje bazlı planlanır. Montaj günü için müşteriden ayrıca izin veya onay alınmaz; <em>teknik ekip randevu tarihinde kapınıza gelir</em>.',
  },
  {
    q: 'Garanti kapsamı nedir ve süresi ne kadar?',
    a: 'Fenetre Systems ürünleri <strong>2 yıl üretici garantisi</strong> kapsamındadır. Garanti; malzeme hataları, profil bükülmesi, boya dökülmesi ve file gevşemesini kapsar. Kullanıcı hatası, dış etkenler veya doğal afet kaynaklı hasarlar kapsam dışındadır. Garanti talebi için WhatsApp üzerinden görselle bildirim yapılması yeterlidir; <em>inceleme 24 saat içinde başlar</em>.',
  },
  {
    q: 'Ölçüm nasıl yapılır? Deneyimim olmaması sorun mu?',
    a: 'Ölçüm deneyimi gerekmez. Sipariş öncesinde <strong>görsel ölçüm talimatı</strong> WhatsApp üzerinden iletilir. Hangi noktadan nasıl ölçüleceği adım adım açıklanır. Şüphe durumunda teknik ekibimiz video görüşmeyle rehberlik eder. Ölçüm hataları çok nadir yaşanır; <em>yaşandığında yeniden üretim ücretsiz karşılanır</em>.',
  },
  {
    q: 'Sineklik fiyatları neye göre değişir?',
    a: 'Fiyat; ürün tipi, açıklık boyutu ve profil rengi değişkenlerine göre belirlenir. <strong>Sabit sineklik en ekonomik</strong>, plise sineklik en yüksek maliyetli seçenektir. Aynı ürün tipinde büyük açıklık, küçük açıklıktan biraz daha pahalı olur. Toplu siparişlerde <em>proje fiyatı</em> uygulanır. Kesin fiyat için ölçü ve ürün bilgisi iletildiğinde aynı gün teklif hazırlanır.',
  },
  {
    q: 'Balkon kapısı için hangi sineklik modeli önerilir?',
    a: 'Balkon kapılarının genişliği ve zemin hizası iki belirleyici kriterdir. Zemin hizalı kapı için <strong>eşiksiz sineklik</strong> ilk tercihtir; bariyer oluşturmaz. Standart balkon kapısı genişliğinde çift kanatlı sürgülü sineklik idealdir. <em>Estetik kaygı öncelikliyse</em> plise sineklik her iki gereksinimi karşılar: hem açılır kapanır, hem katlandığında görünmez.',
  },
  {
    q: 'Köpek veya kedi tırnaklarına dayanıklı sineklik var mı?',
    a: 'Standart fiberglas file, <strong>hayvan tırnaklarına karşı orta düzey direnç</strong> sunar. Yoğun tırmalama durumunda file zamanla delinebilir. Bu durumlar için <em>güçlendirilmiş polyester veya çelik örgülü file</em> seçenekleri mevcuttur; Fenetre Systems bu alternatifleri talep üzerine uygular. Profil ve çerçeve yapısı değişmez; yalnızca file örgüsü güçlendirilir.',
  },
  {
    q: 'Sipariş sonrası ölçü değişikliği yapılabilir mi?',
    a: 'Üretim başlamadan önce yapılan değişiklik talepleri hiçbir ek ücret olmaksızın karşılanır. <strong>Üretim başladıktan sonraki değişiklikler</strong> ise sipariş durumuna göre değerlendirilir; üretim aşamasına bağlı olarak kısmi maliyet oluşabilir. Bu nedenle ölçümlerin <em>sipariş öncesinde doğrulanması</em> önemlidir.',
  },
  {
    q: 'Ürünler nasıl paketleniyor? Kargoda hasar olur mu?',
    a: "Tüm ürünler çift katmanlı koruyucu ambalajla paketlenir. Profil köşeleri köpük koruyucuyla desteklenir. Kargo firmasıyla özel anlaşma çerçevesinde hasar güvencesi sağlanır. <strong>Teslimatta hasarlı ürün saptanırsa</strong> tutanak tutulması ve Fenetre Systems'e bildirilmesi yeterlidir; <em>yenisi gönderilir</em>.",
  },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-brand group-hover:text-primary transition-colors text-sm md:text-base leading-snug pr-2">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-primary' : 'text-gray-400'
          }`}
        />
      </button>
      {isOpen && (
        <div
          className="pb-5 text-sm text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: faq.a }}
        />
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx)

  const half = Math.ceil(faqs.length / 2)
  const col1 = faqs.slice(0, half)
  const col2 = faqs.slice(half)

  return (
    <section id="sss" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-flex">Soru & Cevap</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand mb-5">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sineklik ve perde sistemleri konusunda en çok sorulan sorular; net, doğrudan ve
            pratik bilgiyle yanıtlandı.{' '}
            <a href="/" className="text-primary hover:underline font-semibold">
              Jaluzi perde
            </a>{' '}
            ve diğer ürünler hakkında ek sorunuz olursa WhatsApp&apos;tan iletebilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 px-6 divide-y divide-gray-100">
            {col1.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 px-6 divide-y divide-gray-100">
            {col2.map((faq, i) => (
              <FAQItem
                key={half + i}
                faq={faq}
                isOpen={openIndex === half + i}
                onToggle={() => toggle(half + i)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Aradığınız yanıtı bulamadınız mı? Teknik ekibimiz birkaç dakika içinde yanıt verir.
          </p>
          <a
            href="https://wa.me/905403363873?text=Bir%20sorum%20var%2C%20yard%C4%B1mc%C4%B1%20olur%20musunuz%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
          >
            WhatsApp&apos;ta Soru Sor
          </a>
        </div>
      </div>
    </section>
  )
}
