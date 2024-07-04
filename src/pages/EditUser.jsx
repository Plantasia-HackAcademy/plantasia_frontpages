import "../css/EditUser.css";

function EditUser() {
  return (
    <div className="container">
      <div className="form-div">
        <div className="d-flex flex-column flex-md-row">
          <div className="input-group d-flex flex-column me-md-1 mb-2 first-name">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Type your first name"
              className="mt-1 p-1"
            />
          </div>
          <div className="input-group d-flex flex-column w-md-50 ms-md-1 mb-2 last-name">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Type your last name"
              className="mt-1 p-1"
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className="input-group d-flex flex-column mb-2 me-md-1 address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Type your address"
              className="mt-1 p-1"
            />
          </div>
          <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2 city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Type your city"
              className="mt-1 p-1"
            />
          </div>
          <div className="input-group d-flex flex-column ms-md-1 w-md-50 ms-md-1 mb-2 country">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Type your country"
              className="mt-1 p-1"
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <div className="input-group d-flex flex-column justify-content-between w-md-50 me-md-1 mb-2 state-province">
            <label htmlFor="state">State / Province</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Type your state/province"
              className="mt-1 p-1"
            />
          </div>
          <div className="input-group d-flex flex-column justify-content-between w-md-50 ms-md-1 me-md-1 mb-2 postal-code">
            <label htmlFor="postalCode">Postal code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="Type your postal code"
              className="mt-1 p-1"
            />
          </div>
          <div className="input-group d-flex flex-column ms-md-1 mb-1 phone">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Type your phone"
              className="mt-1 p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
