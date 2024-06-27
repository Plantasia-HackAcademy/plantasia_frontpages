import "../css/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-banner">
        <div className="container banner-container">
          {" "}
          <span className="d-block galadali-bold">Growing</span>
          <span className="d-block galadali-bold">Happiness</span>
        </div>
      </div>
    </>
  );
}

export default Home;
