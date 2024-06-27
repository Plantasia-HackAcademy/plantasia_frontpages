import "../css/Home.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-banner d-flex align-items-end">
        <div className="container banner-container d-flex flex-column">
          {" "}
          <span className="galadali-bold">Growing</span>
          <span className="galadali-bold">Happiness</span>
        <button className="banner-button">Shop all our plants</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
