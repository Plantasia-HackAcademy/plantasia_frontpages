import "../css/FormsPages.css";

function Login() {
  return (
    <>
      <div className="window-box">
        <div className="container bg-form m-3">
          <div className="desktop-form-container">
            <h2 className="title-welcome proxima-nova-regular">Welcome back!</h2>
            <img
              className="forms-logo"
              src={`${import.meta.env.VITE_IMAGES_URL}Plantasia-white.svg`}
              alt="Plantasia-logo"
            />
          </div>
          <div className="form-container">
            <h2 className="title-forms text-center galadali-bold">Log In</h2>
            <form action="" className="proxima-nova-regular">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="forms-input form-control rounded-pill"
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
                  className="forms-input form-control rounded-pill"
                  aria-describedby="password"
                  placeholder="Password"
                />
                <p className="text-end forms-link mt-2">Forgot your password?</p>
              </div>
              <button className="btn-forms form-control rounded-pill my-4">Log In</button>
            </form>
            <p className="text-center darkgreen">
              Don't have an account? <span className="forms-link proxima-nova-bold">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
