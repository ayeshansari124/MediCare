import HeroSlider from "../components/HeroSlider";
import Facilities from "../components/Facilities";
import AboutHospital from "../components/AboutHospital";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Facilities />
      <AboutHospital />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}