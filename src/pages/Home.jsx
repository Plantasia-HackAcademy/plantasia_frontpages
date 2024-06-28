import "../css/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-banner d-flex align-items-end">
        <div className="container banner-container d-flex flex-column justify-content-center p-0">
          <h1 className="galadali-bold banner-title">Growing Happiness</h1>
          <p className="banner-description proxima-nova-regular p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora beatae nihil mollitia nulla repudiandae in labore debitis blanditiis porro quaerat?</p>
          <a href=""className="banner-button">SHOP NOW</a>
        </div>
      </div>

      <section className="section-2">
        <div className="container d-flex">
          <div className="section-2-cards">
            <img src="../images/photo-plants.png" className="object-fit-cover w-100" alt="" />
            <span className="card-title-plants galadali-regular">Plants</span>
            <a className="btn button-see-all proxima-nova-regular" href="">
              See all
            </a>
          </div>
          <div className="section-2-cards text-center">
            <img src="../images/photo-pots.png" className="object-fit-cover w-100" alt="" />
          </div>
          <div className="section-2-cards text-center bg-secondary">
            <img src="../images/photo-care.png" className="object-fit-cover w-100" alt="" />
          </div>
          <div className="section-2-cards text-center bg-success">
            <img src="../images/photo-accessories.png" className="object-fit-cover w-100" alt="" />
          </div>
        </div>
        {/* <div className="container d-flex">
          <div className="find-the-one-div d-flex flex-column">
            <span>Find the one for you</span>
            <span>
              Are you looking for someone to spend time outdoors with? Or some company to watch your
              favorite series? Maybe you’re just looking for someone who gets along with your pet.
              In any case, we have the one for you!
            </span>
            <a href="">Discover our plants -- </a>
          </div>
          <div className="photo-find">
            <img src="../images/photo-accessories.png" alt="" />
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Home;
