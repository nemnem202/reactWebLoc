import Logo from "../assets/Logo";
import "../styles/Layout.scss";
import { Link } from "react-router-dom";

function Header({ page }) {
  return (
    <header className="Header">
      <Logo />
      <nav>
        {/* <a className={TestPage("Home", page)} href="/">
          Acceuil
        </a>
        <a className={TestPage("APropos", page)} href="/A-Propos">
          A Propos
        </a> */}
        <Link to="/" className={TestPage("Home", page)}>
          Acceuil
        </Link>
        <Link to="/A-Propos" className={TestPage("APropos", page)}>
          A propos
        </Link>
      </nav>
    </header>
  );
}

function TestPage(element, page) {
  return element === page ? "selected" : "notselected";
}

export default Header;
