import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import WhatsAppButton from "./components/WhatsAppButton";
import { useSeo } from "./hooks/useSeo";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Instagram from "./sections/Instagram";
import Contact from "./sections/Contact";

export default function App() {
  useSeo();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  );
}
