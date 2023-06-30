import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import GuidelinesPage from "../../pages/GuidelinesPage/GuidelinesPage"

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const handleChatClick = () => {
    // Implement the logic for opening the live chat window
    // e.g., using a chat library or triggering a chat modal
    console.log("Open live chat");
  };

  return (
    <nav>
      <Link to="/home">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
          </Link>

          <Link to="/guidelines">
            <button>Guidelines</button>
          </Link>

          <button onClick={handleChatClick}>Live Chat</button>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/guidelines">
            <button>Guidelines</button>
          </Link>
          <button onClick={handleChatClick}>Live Chat</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
