import Nav from "./components/Nav";
import Subnav from "./components/Subnav";
import Footer from "./footer/Page";
import Homepage from "./home/page";

export default function Home() {
  return (
    <>
      <Nav />
      <Subnav />
      <Homepage />
      <Footer/>
    </>
  );
}
