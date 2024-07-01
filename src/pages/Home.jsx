import "../css/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-banner d-flex align-items-end">
        <div className="container container-padding home-banner-container d-flex flex-column justify-content-center p-sm-0">
          <h1 className="galadali-bold home-banner-title p-0">Growing Happiness</h1>
          <p className="home-banner-description proxima-nova-regular p-0 m-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora beatae nihil mollitia
            nulla repudiandae in labore debitis blanditiis porro quaerat?
          </p>
          <a href="" className="home-banner-button">
            SHOP NOW
          </a>
        </div>
      </div>
      <section className="home-section-2">
        <div className="container cards-container p-0">
          <div className="home-section-2-cards d-flex ms-0">
            <img src="../images/photo-plants.png" className="object-fit-cover w-100" alt="" />
            <span className="card-title galadali-regular">Plants</span>
            <a className="btn button-see-all proxima-nova-regular" href="">
              See all
            </a>
          </div>
          <div className="section-2-cards d-flex">
            <img src="../images/photo-pots.png" className="object-fit-cover w-100" alt="" />
            <span className="card-title galadali-regular">Pots</span>
            <a className="btn button-see-all proxima-nova-regular" href="">
              See all
            </a>
          </div>
          <div className="home-section-2-cards d-flex">
            <img src="../images/photo-care-2.png" className="object-fit-cover w-100" alt="" />
            <span className="card-title galadali-regular">Care</span>
            <a className="btn button-see-all proxima-nova-regular" href="">
              See all
            </a>
          </div>
          <div className="section-2-cards d-flex">
            <img src="../images/photo-accessories.png" className="object-fit-cover w-100" alt="" />
            <span className="card-title galadali-regular">Accesories</span>
            <a className="btn button-see-all proxima-nova-regular" href="">
              See all
            </a>
          </div>
        </div>
        <div className="container d-flex">
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
        </div>
      </section>

      <section className="home-section-3">
        <div className="container d-flex flex-column flex-sm-row p-sm-0">
          <div className="home-section-3-img">
            <img
              src="../images/watering-plant.png"
              alt="person watering plant"
              className="object-fit-cover w-100"
            />
          </div>
          <div className="home-section-3-text">
            <h4 className="galadali-bold">Because love is not enough...</h4>
            <p className="proxima-nova">
              We now that taking care of a plant is not an easy task, but don't worry! We have all
              you need to make that relationship last even through winter.
            </p>
          </div>
        </div>
        {/*           <div className="container container-padding p-sm-0 d-flex justify-content-end">
            <div className="home-section-3-care-products">
              <div className="home-care-product">
                <img src="../images/care-1.png" alt="care product" className="object-fit-cover w-100"/>
              </div>
              <div className="home-care-product">
                <img src="../images/care-1.png" alt="care product" className="object-fit-cover w-100"/>
              </div>
              <div className="home-care-product">
                <img src="../images/care-3.png" alt="care product" className="object-fit-cover w-100"/>
              </div>
            </div>
          </div> */}
      </section>
    </>
  );
}

export default Home;
