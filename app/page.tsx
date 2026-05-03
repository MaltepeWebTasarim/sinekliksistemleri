import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import BrandValue from '@/components/BrandValue'
import Experience from '@/components/Experience'
import Process from '@/components/Process'
import Applications from '@/components/Applications'
import TrustProofs from '@/components/TrustProofs'
import ServiceRegions from '@/components/ServiceRegions'
import MaterialQuality from '@/components/MaterialQuality'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Products />
        <BrandValue />
        <Experience />
        <Process />
        <Applications />
        <TrustProofs />
        <ServiceRegions />
        <MaterialQuality />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
