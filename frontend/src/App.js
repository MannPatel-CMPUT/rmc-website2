import { useEffect } from "react";
import "@/App.css";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Clients from "@/components/sections/Clients";
import Fleet from "@/components/sections/Fleet";
import WhatsAppCTA from "@/components/sections/WhatsAppCTA";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";

function App() {
  useEffect(() => {
    // Smooth scroll for hash links
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="App min-h-screen bg-[#050505] text-white font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Stats />
        <WhyUs />
        <Clients />
        <Fleet />
        <WhatsAppCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
