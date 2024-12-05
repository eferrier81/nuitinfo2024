import React, { useState } from "react";

function BodyPart({ data }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="body-part"
      onClick={() => setShowDetails(!showDetails)}
    >
      <h2>{data.title}</h2>
      {showDetails && (
        <div className="details">
          <p><strong>Parallèle :</strong> {data.parallel}</p>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}

export default BodyPart;
