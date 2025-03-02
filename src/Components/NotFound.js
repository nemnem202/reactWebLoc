import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <div className="MainContainer">
      <div className="HeaderPageContent">
        <div>
          <Header />
          <div className="NotFoundContainer">
            <h1>404</h1>
            <h2>
              <span>Oups! La page que </span>vous demandez n'existe pas.
            </h2>
            <Link to="/">Retourner sur la page d’accueil</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;
