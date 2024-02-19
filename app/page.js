import Nav from "./components/nav/Nav";
import Hero from "./components/Hero/Hero";
import Offer from "./components/offer/Offer";
import Blog from "./components/blog/Blog";
import Gallery from "./components/gallery/Gallery";
import Banner from "./components/banner/Banner";
import FooterBanner from "./components/footerBanner/FooterBanner";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Offer />
      <Blog />
      <Gallery />
      <Banner />
      <FooterBanner />
      <Footer />
    </div>
  );
}
