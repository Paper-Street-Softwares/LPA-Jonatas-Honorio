import WhatsappFloatingButton from '../components/buttons/WhatsappFloatingButton'
import About from '../sections/About'
import AuthoritySection from '../sections/AuthoritySection'
import Cta from '../sections/Cta'
import DiferentialSection from '../sections/DiferentialSection'
import Features from '../sections/Features'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import PartnershipSection from '../sections/PartnershipSection'
import ServicesSection from '../sections/ServicesSection'
import TrainingSection from '../sections/TrainingSection'
import Transformacao from '../sections/Transformacao'

export default function Index() {
  return (
    <>
      <Hero imagemFocadaBackground={true} />
      <main>
        <AuthoritySection />
        <Features />
        <ServicesSection />
        <TrainingSection />
        <DiferentialSection />
        <PartnershipSection />
        {/* <Transformacao /> */}
        <Cta />
        <About />
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  )
}
