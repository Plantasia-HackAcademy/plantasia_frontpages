import Navbar from "../components/Navbar";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="product-body  mt-5">
          <b>Volver al listado</b>
          <div className="d-flex">
            <img src="../../images/Product.svg" alt="Product" />
            <div>
              <h1>Titulo</h1>
              <h2>Subtitulo</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductPage;
