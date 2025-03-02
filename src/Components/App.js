import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FicheLogement from "./FicheLogement";
import APropos from "./APropos";
import NotFound from "./NotFound";
import logements from "../datas/logements.json";

import "../styles/App.scss";
import "../styles/Header.scss";
import "../styles/Footer.scss";
import "../styles/ImagePresentationCard.scss";
import "../styles/LocationCard.scss";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/A-Propos" element={<APropos />} />
      <Route path="*" element={<NotFound />} />

      {logements.map((logement) => (
        <Route
          path={`/Fiche-Logement/${logement.id}`}
          element={<FicheLogement index={logement} />}
          key={`FL ${logement.id}`}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;
