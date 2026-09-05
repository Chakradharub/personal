import { useState } from "react";
import { useNavigate } from "react-router-dom";

import neoImage from "../../images/neo.jpg";
import trinityImage from "../../images/trinity.jpg";
import morpheusImage from "../../images/morpheus.jpg";
import oracleImage from "../../images/oracle.jpg";
import satiImage from "../../images/sati.jpg";
import agentSmithImage from "../../images/agent-smith.jpg";

type Profile = {
  name: string;
  image: string;
};

const profiles: Profile[] = [
  {
    name: "Neo",
    image: neoImage,
  },
  {
    name: "Trinity",
    image: trinityImage,
  },
  {
    name: "Morpheus",
    image: morpheusImage,
  },
  {
    name: "Oracle",
    image: oracleImage,
  },
  {
    name: "Sati",
    image: satiImage,
  },
  {
    name: "Agent Smith",
    image: agentSmithImage,
  },
];

function Home() {
  const navigate = useNavigate();

  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleSelect = (name: string) => {
    // Set the selected character
    setSelectedName(name);

    // Start the exit animation
    setIsLeaving(true);

    // Wait for animation, then go to Professional page
    setTimeout(() => {
      navigate(`/professional?name=${encodeURIComponent(name)}`);
    }, 900);
  };

  return (
    <main className={`home-page ${isLeaving ? "page-leaving" : ""}`}>
      <section className="selection-container">

        <p className="welcome-text">
          THE MATRIX
        </p>

        <h1>
          Which Matrix character are you?
        </h1>

        <div className="profiles-roller">
          {profiles.map((profile) => (
            <button
              key={profile.name}
              className={`profile-card ${
                selectedName === profile.name ? "selected" : ""
              }`}
              onClick={() => handleSelect(profile.name)}
              disabled={isLeaving}
            >
              <img
                src={profile.image}
                alt={profile.name}
              />

              <div className="profile-card-overlay">
                <span>{profile.name}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedName && (
          <p className="selection-message">
            Entering as {selectedName}...
          </p>
        )}

      </section>
    </main>
  );
}

export default Home;