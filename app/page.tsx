import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
// import CaseStudies from "@/components/case-studies"
import AboutSection from "@/components/About"
import ClientsMarquee from "@/components/clients"
import Team from "@/components/Team"
import Footer from "@/components/footer"
import Contact from "@/components/Contact"
import Portfolio from "@/components/Portfolio"
import Achievements from "@/components/Achievements"
import IntroPage from "@/components/IntroPage"


export default function Home() {
  return (
    <div className="min-h-screen">
      <IntroPage/>
      <Header />
      <Hero />
      <AboutSection/>
      <Services />
      <Portfolio/>
      <ClientsMarquee   />
      <Achievements/>
      <Team   />
      <Contact   />

      <Footer/>
  

      {/* <main>
        <CaseStudies />
        <Newsletter />
      </main>
      */}         
    </div>
  )
}

