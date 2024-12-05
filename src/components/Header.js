import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Et si l’océan était un corps humain ?</h1>
      <p>Découvrez les fascinantes similitudes entre les systèmes humains et océaniques.</p>
      <img
        src="https://st5.depositphotos.com/35914836/64942/i/450/depositphotos_649421438-stock-photo-waves-water-surface-background-sea.jpg"  
        alt="Ocean"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      />
    </header>
  );
}

export default Header;
