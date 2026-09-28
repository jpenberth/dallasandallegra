import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Story from "@/components/Story";
import Stills from "@/components/Stills";
import Team from "@/components/Team";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Story />
        <Stills />
        <Team />
        <Support />
      </main>
      <Footer />
    </>
  );
}
