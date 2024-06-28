import "../css/Home.css";

function Home() {
  return (
    <>
      <div className="home-banner d-flex align-items-end">
        <div className="container banner-container d-flex flex-column p-0">
          <span className="galadali-bold">Growing</span>
          <span className="galadali-bold happiness">Happiness</span>
          <a className="banner-button proxima-nova-regular">Shop all our plants</a>
        </div>
      </div>
      <div className="container home-description d-flex">
        <div className="home-description-1">
          <p className="proxima-nova-bold">Lorem ipsum dolor sit amet consectetur</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laboriosam voluptatem
            libero autem maxime delectus recusandae consequatur quod, ipsa quas adipisci modi earum
            omnis minus itaque mollitia nobis? Unde veritatis ratione sapiente maiores odio
            voluptate dolor libero modi et quae.
          </p>
        </div>
        <div className="home-description-2 align-self-end d-flex justify-content-center">
          <div>
            <a className="galadali-bold home-description-link" href="">
              Shop now!
            </a>
          </div>
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
