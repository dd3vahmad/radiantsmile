import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}
