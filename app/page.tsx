import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
