import React, { useState } from "react";
import Header from "./components/Header";
import BodyPart from "./components/BodyPart";
import MediaPlayer from "./components/MediaPlayer";
import "./styles/App.css";

function App() {
  // État pour gérer l'onglet sélectionné
  const [activeTab, setActiveTab] = useState("ocean-impact");

  // Les sections du corps humain (déjà existantes)
  const bodyParts = [
    {
      id: "heart",
      title: "Cœur",
      parallel: "Courants marins",
      description:
        "Le cœur pompe le sang, tout comme les courants marins distribuent chaleur et nutriments dans l’océan.",
    },
    {
      id: "lungs",
      title: "Poumons",
      parallel: "Échanges gazeux",
      description:
        "Les poumons échangent des gaz comme l’océan absorbe du CO2 et produit de l’oxygène via la photosynthèse.",
    },
    {
      id: "brain",
      title: "Cerveau",
      parallel: "Écosystèmes interconnectés",
      description:
        "Le cerveau coordonne le corps, tout comme les écosystèmes marins soutiennent la vie océanique.",
    },
  ];

  // Contenu des onglets
  const oceanImpact = (
    <div className="ocean-impact">
      <h2>L'Océan, un Gardien de la Planète</h2>
      <p>
        L'océan joue un rôle crucial dans la régulation du climat et la santé
        globale de la planète. Voici quelques-uns de ses rôles essentiels :
      </p>
      <div className="ocean-impact-section">
        <h3>La régulation du climat</h3>
        <p>
          L’océan permet de conserver une température stable depuis toujours, en
          absorbant et en redistribuant la chaleur à travers ses courants marins.
        </p>
      </div>
      <div className="ocean-impact-section">
        <h3>La limitation des effets du changement climatique</h3>
        <p>
          L'océan agit comme un tampon pour le climat en stockant une grande
          quantité de chaleur et en régulant les températures globales.
        </p>
      </div>
      <div className="ocean-impact-section">
        <h3>Le stockage du carbone</h3>
        <p>
          En absorbant le CO2 de l'atmosphère, l'océan aide à limiter l'effet de
          serre, jouant un rôle essentiel dans la lutte contre le changement
          climatique.
        </p>
      </div>
      <div className="ocean-impact-action">
        <h3>Agissez pour protéger l'Océan !</h3>
        <p>
          En prenant conscience de l'importance de l'océan, vous pouvez
          contribuer à sa préservation. Chaque petit geste compte pour protéger
          cet écosystème vital pour la planète.
        </p>
      </div>
    </div>
  );

  const oceanHuman = (
    <div className="body-parts">
      {bodyParts.map((part) => (
        <BodyPart key={part.id} data={part} />
      ))}
    </div>
  );

  const mediaContent = (
    <div className="media-player">
      <MediaPlayer />
    </div>
  );

  // Fonction pour afficher le contenu de l'onglet actif
  const getActiveTabContent = () => {
    switch (activeTab) {
      case "ocean-impact":
        return oceanImpact;
      case "ocean-human":
        return oceanHuman;
      case "media":
        return mediaContent;
      default:
        return oceanImpact;
    }
  };

  return (
    <div className="app">
      <Header />
      {/* Onglets de navigation */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "ocean-impact" ? "active" : ""}`}
          onClick={() => setActiveTab("ocean-impact")}
        >
          Impact de l'Océan
        </button>
        <button
          className={`tab-button ${activeTab === "ocean-human" ? "active" : ""}`}
          onClick={() => setActiveTab("ocean-human")}
        >
          L'Océan et le Corps Humain
        </button>
        <button
          className={`tab-button ${activeTab === "media" ? "active" : ""}`}
          onClick={() => setActiveTab("media")}
        >
          Podcasts et Vidéos
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      {getActiveTabContent()}
    </div>
  );
}

export default App;