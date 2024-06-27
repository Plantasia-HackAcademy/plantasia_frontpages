import "../css/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-banner d-flex align-items-end">
        <div className="container banner-container d-flex flex-column">
          {" "}
          <span className="galadali-bold">Growing</span>
          <span className="galadali-bold">Happiness</span>
          <a className="banner-button proxima-nova-regular">Shop all our plants</a>
        </div>
      </div>
      <section className="section-2"></section>
      <Footer />
    </>
  );
}

export default Home;
