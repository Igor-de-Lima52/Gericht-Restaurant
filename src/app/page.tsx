import "./page.css";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/container/Header";
import { AboutUs } from "@/container/AboutUs";
import { SpecialMenu } from "@/container/Menu";
import { Chef } from "@/container/Chef";
import { Intro } from "@/container/Intro";
import { Laurels } from "@/container/Laurels";
import { Gallery } from "@/container/Gallery";
import { FindUs } from "@/container/Findus";
import { Footer } from "@/container/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}
