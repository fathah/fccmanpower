import CommonLayout from "@/components/layout/CommonLayout";
import Hero from "./Hero";
import AboutSection from "./About";
import Features from "./Features";
import { FlipWordsSection } from "./FlipWordSection";
import { ContactForm } from "./ContactSection";
import Clients from "./Clients";

const IndexPage = () => {
  return (
    <CommonLayout>
      
      <Hero/>
      <AboutSection/>
      <Features/>
      <FlipWordsSection />
      <ContactForm/>
      <Clients/>
    </CommonLayout>
  );
}

export default IndexPage;