import { MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="iletisim" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #404e5e 0%, #2d3748 100%)' }}
        >
          <div className="px-8 py-14 md:px-14 md:py-16 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6"
                  style={{ backgroundColor: 'rgba(131,189,129,0.2)', color: '#83bd81' }}
                >
                  Ücretsiz Danışmanlık
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                  Ölçünüzü Verin,{' '}
                  <span style={{ color: '#83bd81' }}>Aynı Gün Teklif</span> Alın
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Teknik ekibimiz ölçüm talimatını anında iletir. Teklif hazırlanır,{' '}
                  <strong className="text-white">üretim başlar</strong>, montajcı kapınıza gelir.
                  Türkiye&apos;nin her ilinde,{' '}
                  <a href="/" className="text-green-300 hover:underline font-semibold">
                    sineklik
                  </a>{' '}
                  ve perde sistemlerinde tek durak.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Ölçüm talimatı anında iletilir',
                    'Teklif aynı gün, yazılı olarak paylaşılır',
                    'Üretim 5–7 iş günü; kargo 1–3 gün',
                    'Montaj bölge ekibi tarafından yapılır',
                    '2 yıl üretici garantisi, ücretsiz yedek parça',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                        style={{ backgroundColor: '#83bd81' }}
                      >
                        ✓
                      </div>
                      <span className="text-white/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#83bd81' }} />
                  Cumhuriyet Mah. 2233 Sok. No:4/A — Gebze / Kocaeli
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/905403363873?text=Merhaba%2C%20sineklik%20sistemleri%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-5 rounded-2xl text-white font-bold text-lg group hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#83bd81' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-base font-black">WhatsApp&apos;tan Teklif Al</div>
                    <div className="text-sm font-normal opacity-80">+90 540 336 38 73</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+905403363873"
                  className="flex items-center gap-4 w-full p-5 rounded-2xl font-bold text-lg group hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left text-white">
                    <div className="text-base font-black">Telefon ile Ara</div>
                    <div className="text-sm font-normal opacity-70">0540 336 38 73</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto text-white group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/905403363873?text=Bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl text-sm font-semibold hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px dashed rgba(255,255,255,0.2)' }}
                >
                  Bayilik Başvurusu İçin WhatsApp&apos;a Yazın →
                </a>

                <div
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div className="text-xs text-white/50 mb-3 font-medium uppercase tracking-wider">
                    Çalışma Saatleri
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-white/80">Pazartesi – Cuma</div>
                    <div className="text-white font-semibold">08:00 – 18:00</div>
                    <div className="text-white/80">Cumartesi</div>
                    <div className="text-white font-semibold">09:00 – 16:00</div>
                    <div className="text-white/80">Pazar</div>
                    <div className="text-white/50">Kapalı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
