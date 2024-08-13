import CommonLayout from "@/components/layout/CommonLayout";
import Hero from "./Hero";
import AboutSection from "./About";
import Features from "./Features";
import { FlipWordsSection } from "./FlipWordSection";
import { ContactForm } from "./ContactSection";

const IndexPage = () => {
  return (
    <CommonLayout>
      
      <Hero/>
      <AboutSection/>
      <Features/>
      <FlipWordsSection />
      <ContactForm/>
    </CommonLayout>
  );
}

export default IndexPage;