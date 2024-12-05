import React from "react";

function MediaPlayer() {
  return (
    <div className="media-player">
      <h2>Podcast et vidéos</h2>
      <audio controls>
        <source src="PODCAST-AUDIO-Florian Sévellec.m4a" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'audio.
      </audio>
      <video controls width="300">
        <source src="Florian Sevellec - Oona Layolle-001-SD 480p.mov" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <video controls width="300">
        <source src="Frederic Le Moigne - Part 1-SD 480p.mov" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <video controls width="300">
        <source src="Frederic Le Moigne - Part 2-SD 480p.mov" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}

export default MediaPlayer;
