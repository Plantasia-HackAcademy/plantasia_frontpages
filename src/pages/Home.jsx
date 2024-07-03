import "../css/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/HomeSectionTwo.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const products = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
        params: { limit: 3 },
      });
      setProducts(response.data.products);
    };
    products();
  }, []);

  return (
    products && (
      <>
        <Navbar />
        <div className="home-banner d-flex align-items-center">
          <div className="container container-padding home-banner-container d-flex flex-wrap flex-column justify-content-center p-sm-0">
            <h1 className="galadali-bold p-0">Growing Happiness</h1>
            <p className="proxima-nova-regular p-0 m-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora beatae nihil
              mollitia nulla repudiandae in labore debitis blanditiis porro quaerat?
            </p>
            <a href="/products" className="home-banner-button">
              SHOP NOW
            </a>
          </div>
        </div>
        <section className="home-section-2">
          <div className="container cards-container p-sm-0">
            <div className="home-section-2-cards card-one mb-4 shadow">
              <span className="card-title galadali-regular">Plants</span>
              <a className="btn button-see-all proxima-nova-regular" href="">
                See all
              </a>
            </div>
            <div className="home-section-2-cards card-two">
              <span className="card-title galadali-regular">Pots</span>
              <a className="btn button-see-all proxima-nova-regular" href="">
                See all
              </a>
            </div>
            <div className="home-section-2-cards card-three">
              <span className="card-title galadali-regular">Care</span>
              <a className="btn button-see-all proxima-nova-regular" href="">
                See all
              </a>
            </div>
            <div className="home-section-2-cards card-four">
              <span className="card-title galadali-regular">Accesories</span>
              <a className="btn button-see-all proxima-nova-regular" href="">
                See all
              </a>
            </div>
          </div>
          <div className="container d-flex flex-column flex-md-row p-sm-0 mt-5">
            <div className="home-section-2-img order-md-2">
              <img
                src="../images/home/fullgreen-section2.png"
                alt="Person watering plant"
                className="object-fit-cover w-100 shadow"
              />
            </div>
            <div className="d-flex flex-column justify-content-between home-section-2-box">
              <h4 className="galadali-bold">Find the one for you</h4>
              <p className="proxima-nova">
                Are you looking for someone to spend time outdoors with? Or some company to watch
                your favorite series? Maybe you're just looking for someone who gets along with your
                pet. In any case, we have the one for you!
              </p>
              <div className="mb-1 home-section-2-link">
                <a href="/products" className="home-section-2-link">
                  Discover our plants
                </a>
              </div>
              <div className="home-section-2-plants">
                {products.map((product) => (
                  <div className="home-plant-product">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}plants/${product.image}`}
                      alt={product.name}
                      className="object-fit-cover w-100 shadow"
                    />
                    <span className="ms-1 home-span-start">{product.name.split("(")[0]}</span>
                    <span className="text-end me-1 home-span-end">See product ⭢</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-section-3">
          <div className="container d-flex flex-column flex-md-row p-sm-0 mt-5">
            <div className="home-section-3-img">
              <img
                src="../images/home/photo-accessories.png"
                alt="Person watering plant"
                className="object-fit-cover w-100 shadow"
              />
            </div>

            <div className="d-flex flex-column justify-content-between home-section-3-box">
              <h4 className="galadali-bold">Because love is not enough...</h4>
              <p className="proxima-nova">
                We now that taking care of a plant is not an easy task, but don't worry! We have all
                you need to make that relationship last even through winter.
              </p>
              <div className="mb-1 home-section-3-link text-end">
                <a href="/products" className="home-section-3-link">
                  Take care of her <i className="bi bi-heart-arrow"></i>
                </a>
              </div>
              <div className="home-section-3-care-products">
                {products.map((product) => (
                  <div className="home-care-product">
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}plants/${product.image}`}
                      alt={product.name}
                      className="object-fit-cover w-100 shadow"
                    />
                    <span className="ms-1 home-span-start">{product.name.split("(")[0]}</span>
                    <span className="text-end me-1 home-span-end">See product ⭢</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-section-4 mb-2">
          <div className="container p-sm-0 mt-5">
            <div className="mb-1 home-section-4-link text-end mb-1">
              <a href="" className="home-section-4-link">
                <i class="bi bi-instagram me-1"></i>Join our community!
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="home-carrousel">
              <img
                src="./images/home/photo-plants.png"
                alt="House with plants"
                className="object-fit-cover w-100"
              />
            </div>
            <div className="home-carrousel">
              <img
                src="./images/home/photo-plants.png"
                alt="House with plants"
                className="object-fit-cover w-100"
              />
            </div>
            <div className="home-carrousel">
              <img
                src="./images/home/photo-plants.png"
                alt="House with plants"
                className="object-fit-cover w-100"
              />
            </div>
            <div className="home-carrousel">
              <img
                src="./images/home/photo-plants.png"
                alt="Home with plants"
                className="object-fit-cover w-100"
              />
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  );
}

export default Home;
