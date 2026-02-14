import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
// import Newsletter from "@/components/newsletter"
// import CaseStudies from "@/components/case-studies"
// import Footer from "@/components/footer"
import AboutSection from "@/components/About"
import ClientsMarquee from "@/components/clients"
import Team from "@/components/Team"
import Footer from "@/components/footer"
import Contact from "@/components/Contact"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection/>
      <Services />
      {/* <Portfolio   /> */}
      <ClientsMarquee   />
      {/* <Achievements   /> */}
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

