import Cate from "./categ/page";
import Cover from "./cover/page";
import Features from "./feature/page";
import Footer from "./footer/page";
import Home from "./landing/page";
import Header from "./navbar/page";
import Offer from "./offer/page";
import Para from "./para/page";
import Ship from "./ship/page";
import Uni from "./unique/page";

export default function HomePage() {
  return (
    <main>
      <Offer />
      <Header />
      <Home />
      <Uni />
      <Features />
      <Cate />
      <Cover />
      <Para />
      <Ship />
      <Footer />
    </main>
  );
}
