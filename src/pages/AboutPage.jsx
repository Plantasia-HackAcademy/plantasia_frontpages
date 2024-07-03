import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/AboutPage.css";

function About() {
  return (
    <>
      <section className="aboutus-banner d-flex align-items-end justify-content-center ">
        <div className="container banner-title d-flex flex-column p-0">
          <span className="galadali-bold">About</span>
          <span className="galadali-bold">This Proyect</span>
        </div>
      </section>
      <section className="aboutus-description container d-flex">
        <div>
          <p className="aboutuse-description-pharagraph">
            Este sitio web fue desarrollado por un grupo de estudiantes en el marco del proyecto
            final para el Bootcamp de desarrollo web de Hack Academy. El mismo es un programa
            educativo intensivo con una duración de 3 meses y una carga horaria 40 horas semanales.
          </p>
          <p className="aboutuse-description-pharagraph">
            Durante este curso los estudiantes invierten más de 600 horas en aprender Node.js,
            Express, React.js, SQL, MongoDB y git entre otras tecnologías
          </p>
        </div>
      </section>
      <section className="aboutus-mainbody container">
        <div className="row g-5">
          <div className="col-xl-8 col-lg-12">
            <div className="aboutus-mainbody-section1 ">
              <h2>Technology</h2>
              <p>
                Para el Front-End del sitio se desarrolló una aplicación
                en React (usando Create-React-App) mientras que para el Back-End se desarrolló
                una REST API hecha con Node.js, Express, SQL y Git/GitHub.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12 d-flex flex-column">
            <div className="aboutus-mainbody-section">
              <h2>Proyect Duration</h2>
              <p>
                El proyecto fue desarrollado en tan sólo 3 semanas, durante noviembre de 2022. El
                mismo se dividió en sprints (Scrum) de una semana de duración.
              </p>
            </div>
            <div className="aboutus-mainbody-section">
              <h2>Planning</h2>
              <p>
                Para la organización de tareas durante el proyecto se utilizó Trello. Esto permitió
                que cada integrante del equipo estuviese permanentemente al tanto del estado del
                proyecto así como de las tareas que debía realizar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus-team container p-0">
        <div className="d-flex flex-column align-items-center">
          <h1>
            <b>Team </b>
          </h1>
          <p className="aboutus-team-subtitle">
            Estos somos nosotros. Seis estudiantes de Hack Academy que trabajaron en conjunto para
            llevar a cabo este proyecto de e-commerce
          </p>
        </div>
        <div className="row gx-5 aboutus-team-memberscontainer ">
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img src="../../images/man-user-color-icon.svg" alt="Dammiel Profile Picture" />
            </div>
            <h3>
              <b>Dammiel</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img src="../../images/man-user-color-icon.svg" alt="Dammiel Profile Picture" />
            </div>
            <h3>
              <b>Federica</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src="../../public/images/man-user-color-icon.svg"
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Dennisse</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img src="../../images/man-user-color-icon.svg" alt="Dammiel Profile Picture" />
            </div>
            <h3>
              <b>Laura</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img src="../../images/man-user-color-icon.svg" alt="Dammiel Profile Picture" />
            </div>
            <h3>
              <b>Ivan</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12 aboutus-team-member">
            <div className="aboutus-team-picture">
              <img
                src="../../public/images/man-user-color-icon.svg"
                alt="Dammiel Profile Picture"
              />
            </div>
            <h3>
              <b>Nicole</b>
            </h3>
            <h5>
              <b>Junior Full Stack Developer</b>
            </h5>
            <p>
              Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris
              sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.
            </p>
            <button className="aboutus-team-button">
              <i className="bi bi-github"></i>
            </button>
            <button className="aboutus-team-button">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
