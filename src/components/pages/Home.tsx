import { useState } from "react";

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
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    setSelectedName(name);
  };

  return (
    <main className="home-page">
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
            You selected {selectedName}
          </p>
        )}

      </section>
    </main>
  );
}

export default Home;
