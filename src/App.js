import React from "react";
import Header from "./components/Header";
import BodyPart from "./components/BodyPart";
import MediaPlayer from "./components/MediaPlayer";
import "./styles/App.css";

function App() {
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

  return (
    <div className="app">
      <Header />
      <div className="body-parts">
        {bodyParts.map((part) => (
          <BodyPart key={part.id} data={part} />
        ))}
      </div>
      <MediaPlayer />
    </div>
  );
}

export default App;
