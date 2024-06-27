import "../css/FormsPages.css";

function SignUp() {
  return (
    <>
      <div className="window-box">
        <div className="container bg-form m-3">
          <div className="desktop-form-container">
            <h2 className="title-welcome galadali-bold">Create an account</h2>
            <img src="../../public/images/Logo.svg" alt="Plantasia-logo" />
          </div>
          <div className="form-container">
            <h2 className="title-forms text-center galadali-bold">Sign Up</h2>
            <form action="" className="proxima-nova-regular">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="form-control rounded-pill shadow"
                  aria-describedby="firstname"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control rounded-pill shadow"
                  aria-describedby="lastname"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control rounded-pill shadow"
                  aria-describedby="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control rounded-pill shadow"
                  aria-describedby="password"
                  placeholder="Password"
                />
              </div>
              <button className="btn-forms form-control rounded-pill my-4">Sign Up</button>
            </form>
            <p className="proxima-nova-regular text-center">
              Already have an account? <span className="forms-link proxima-nova-bold">Log In</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
