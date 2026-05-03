import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://sinekliksistemleri.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sineklik Sistemleri - Estetik Koruma Kalkanı",
    template: '%s | Sineklik Sistemleri',
  },
  description:
    "Sineklik Sistemleri ile evinizi böceklerden koruyun. Kaliteli malzeme, estetik tasarım ve uzun ömürlü kullanım. Hemen keşfedin!",
  keywords: [
    'sineklik sistemleri',
    'sineklik',
    'plise sineklik',
    'eşiksiz sineklik',
    'sabit sineklik',
    'duble sineklik',
    'sineklik firmaları',
    'jaluzi perde',
    'honeycomb perde',
    'zip perde',
    'düet perde',
    'plise perde',
    'pencere sinekliği',
    'kapı sinekliği',
    'sineklik fiyatları',
  ],
  authors: [{ name: 'Sineklik Sistemleri', url: 'https://sinekliksistemleri.com' }],
  creator: 'Sineklik Sistemleri',
  publisher: 'Sineklik Sistemleri',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    title: "Sineklik Sistemleri - Estetik Koruma Kalkanı",
    description:
      "Sineklik Sistemleri ile evinizi böceklerden koruyun. Kaliteli malzeme, estetik tasarım ve uzun ömürlü kullanım. Hemen keşfedin!",
    siteName: 'Sineklik Sistemleri',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sineklik Sistemleri - Estetik Koruma Kalkanı',
    description:
      "Sineklik Sistemleri ile evinizi böceklerden koruyun. Kaliteli malzeme, estetik tasarım ve uzun ömürlü kullanım.",
    site: '@sinekliksistemleri',
    creator: '@sinekliksistemleri',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Fenetre Systems',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
        width: 200,
        height: 60,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+90-540-336-3873',
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: 'Turkish',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
        addressLocality: 'Gebze',
        addressRegion: 'Kocaeli',
        postalCode: '41400',
        addressCountry: 'TR',
      },
      sameAs: [
        'https://www.facebook.com/FenetreSystems/',
        'https://www.instagram.com/fenetresystems/',
        'https://x.com/FenetreSystems',
        'https://www.linkedin.com/company/fenetresystems/',
        'https://tr.pinterest.com/fenetresystems/',
        'https://www.youtube.com/@FenetreSystems',
        'https://www.fenetresystems.com',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Fenetre Systems – Sineklik Sistemleri',
      description:
        'Sabit, plise, duble ve eşiksiz sineklik sistemleri ile jaluzi, honeycomb ve zip perde üreticisi.',
      url: siteUrl,
      telephone: '+90-540-336-3873',
      email: 'info@fenetresystems.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
        addressLocality: 'Gebze',
        addressRegion: 'Kocaeli',
        postalCode: '41400',
        addressCountry: 'TR',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '16:00',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'TRY',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Sineklik Sistemleri – Fenetre Systems',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'tr-TR',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Sineklik sistemleri ne kadar süre dayanır?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fenetre Systems tarafından üretilen sineklik sistemleri, alüminyum profil ve UV dayanımlı fiberglas file kombinasyonu sayesinde 10-15 yıl sorunsuz hizmet verir. Profil yüzeyine uygulanan elektrostatik toz boya, tuzlu deniz havasına ve yoğun güneşe karşı renk ve sertlik kaybını önler.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sabit sineklik mi yoksa plise sineklik mi tercih edilmeli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sabit sineklik, kurulum basitliği ve düşük maliyet açısından öne çıkar. Yalnızca havalandırma amaçlı pencereler için idealdir. Plise sineklik ise katlanan yapısıyla pencerenin tüm kullanımını korur; geniş açıklıklar ve estetik önceliği olan mekânlar için daha avantajlıdır.',
          },
        },
        {
          '@type': 'Question',
          name: 'Eşiksiz sineklik hangi kapılara uygulanır?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eşiksiz sineklik; balkon, teras ve bahçeye açılan zemin hizalı kapılara uygulanır. Alt bariyerin tamamen kaldırıldığı bu sistem, tekerlekli sandalye kullanıcıları, yaşlılar ve küçük çocuklar için özellikle uygundur.',
          },
        },
        {
          '@type': 'Question',
          name: "Türkiye'nin tüm illerine montaj yapılıyor mu?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Evet. Fenetre Systems ürünleri Türkiye'nin 81 iline demonte hâlde kargolarla ulaştırılır. Teslimat sonrasında bölge ekibi ürünü yerinde monte eder. Montaj süresi konut için genellikle 1–3 saattir.",
          },
        },
        {
          '@type': 'Question',
          name: 'Zip perde dış mekânda güvenle kullanılabilir mi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Zip perde, yan kanallara kilitli fermuarlı bant tasarımı sayesinde rüzgar basıncına ve yağmura dayanıklıdır. Teras, pergola ve yapı cephesinde güvenle uygulanır. Güneş ışınlarını %90'a varan oranda kesen kumaş seçenekleriyle iç mekân sıcaklığını belirgin ölçüde düşürür.",
          },
        },
        {
          '@type': 'Question',
          name: 'Honeycomb perde enerji tasarrufu sağlar mı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Evet. Honeycomb perdenin altıgen hücre yapısı, pencere camıyla kumaş arasında hareketsiz hava tabakaları oluşturur. Kışın ısı kaybını yavaşlatır, yazın güneşten kaynaklanan ısı kazanımını frenler.',
          },
        },
        {
          '@type': 'Question',
          name: 'Özel ölçülerde sineklik üretimi yapılıyor mu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fenetre Systems, standart ölçü dışındaki tüm pencere ve kapı açıklıkları için özel ölçü üretim yapar. Sipariş öncesinde ölçüm talimatı paylaşılır ya da teknik ekibimiz yerinde ölçüm için randevu ayarlar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bayilik almak için ne yapmalıyım?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bayilik başvurusu için WhatsApp hattımız üzerinden iletişime geçmeniz yeterlidir. Bölge, kapasite ve ürün grubu tercihinize göre bayilik koşulları detaylı şekilde paylaşılır.',
          },
        },
        {
          '@type': 'Question',
          name: 'Jaluzi perde ile düet perde arasındaki fark nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jaluzi perde, yatay kanatçıkların açı ayarıyla ışık kontrolü sağlar. Düet perde ise şeffaf ve opak şeritlerin dönüşümlü hizalanmasıyla çalışır; kullanıcı iki farklı görünüm arasında geçiş yapar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Plise sineklik nasıl temizlenir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plise sinekliğin file yüzeyi, nemli mikrofiber bez ya da fırçalı el süpürgesiyle kolayca temizlenir. Katlı yapı içinde biriken toz için ılık sabunlu su ve yumuşak bir fırça kullanılabilir. Güçlü solventler file dokusuna zarar verdiğinden kesinlikle önerilmez.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#83bd81" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}
