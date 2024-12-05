import React from "react";

function MediaPlayer() {
  return (
    <div className="media-player">
      <h2>Podcast et Vidéos</h2>
      <div className="media-grid">
        {/* Podcast Audio */}
        <div className="media-item">
          <h3>Podcast-Audio Florian Sévellec</h3>
          <audio controls>
            <source
              src="PODCAST-AUDIO-Florian Sévellec.m4a"
              type="audio/mpeg"
            />
            Votre navigateur ne supporte pas l'audio.
          </audio>
        </div>

        {/* Première vidéo */}
        <div className="media-item">
          <h3>Vidéo Principale - Florian Sevellec</h3>
          <video controls width="100%">
            <source
              src="Florian Sevellec - Oona Layolle-001-SD 480p.mov"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>

        {/* Vidéo divisée en 2 parties */}
        <div className="media-item">
          <h3>Frederic Le Moigne - Part 1</h3>
          <video controls width="100%">
            <source
              src="Frederic Le Moigne - Part 1-SD 480p.mov"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>

        <div className="media-item">
          <h3>Frederic Le Moigne - Part 2</h3>
          <video controls width="100%">
            <source
              src="Frederic Le Moigne - Part 2-SD 480p.mov"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>
    </div>
  );
}

export default MediaPlayer;
