import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
// import axios from "axios";

function OwnerSignupPage() {
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPassword, setOwnerPassword] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleOwnerEmail = (e) => setOwnerEmail(e.target.value);
  const handleOwnerPassword = (e) => setOwnerPassword(e.target.value);
  const handleOwnerName = (e) => setOwnerName(e.target.value);
  const handleOwnerPhone = (e) => setOwnerPhone(e.target.value);  
  const handleCity = (e) => setCity(e.target.value);
  const handleState = (e) => setState(e.target.value);
  const handleZip = (e) => setZip(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);

  const handleOwnerSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { ownerEmail, ownerPassword, ownerName, ownerPhone, city, state, zip, country };

    // Or using a service
    authService
      .ownersignup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleOwnerSignupSubmit}>

        <input type="email" name="ownerEmail" value={ownerEmail} onChange={handleOwnerEmail} placeholder="Enter your email" />

        <input
          type="password"
          name="ownerPassword"
          value={ownerPassword}
          onChange={handleOwnerPassword} 
          placeholder="Enter a password"
        />

        <input type="text" name="ownerName" value={ownerName} onChange={handleOwnerName} placeholder="Enter your name"/>

        <input type="number" name="ownerPhone" value={ownerPhone} onChange={handleOwnerPhone} placeholder="Enter your phone"/>

        <input type="text" name="city" value={city} onChange={handleCity} placeholder="City"/>

        <input type="text" name="state" value={state} onChange={handleState} placeholder="State"/>

        <input type="number" name="zip" value={zip} onChange={handleZip} placeholder="Zip"/>

        <input type="text" name="country" value={country} onChange={handleCountry} placeholder="Country"/>

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default OwnerSignupPage;
