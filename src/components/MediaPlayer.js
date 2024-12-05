import React from "react";

function MediaPlayer() {
  return (
    <div className="media-player">
      <h2>Podcast et vidéos</h2>
      <audio controls>
        <source src="path_to_audio_file.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'audio.
      </audio>
      <video controls width="300">
        <source src="path_to_video_file.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}

export default MediaPlayer;
