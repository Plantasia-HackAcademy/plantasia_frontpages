import "../css/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-banner d-flex align-items-end">
        <div className="container container-padding banner-container d-flex flex-column justify-content-center p-sm-0">
          <h1 className="galadali-bold banner-title p-0">Growing Happiness</h1>
          <p className="banner-description proxima-nova-regular p-0 m-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora beatae nihil mollitia
            nulla repudiandae in labore debitis blanditiis porro quaerat?
          </p>
          <a href="" className="banner-button">
            SHOP NOW
          </a>
        </div>
      </div>
      <section className="section-2"></section>
      <section className="section-3"></section>
    </>
  );
}

export default Home;
