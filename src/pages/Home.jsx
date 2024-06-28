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
      <section className="section-2"></section>
    </>
  );
}

export default Home;
