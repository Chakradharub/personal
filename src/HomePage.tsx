import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

const animals = [
  {
    name: "Tiger",
    image:"",
  },
  {
    name: "Elephant",
    image:"",
  },
  {
    name: "Wolf",
    image:"",
  },
  {
    name: "Eagle",
    image: "",
  },
];

export function HomePage({ setSelectedName }) {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const handleSelect = (name) => {
    setSelectedName(name);

    setAnimating(true);

    setTimeout(() => {
      navigate("/professional");
    }, 1800);
  };

  return (
    <div>
      <h1>
        Choose Your Character
      </h1>

      <div>
        {animals.map((animal) => (
          <div key={animal.name} onClick={() =>
              handleSelect(animal.name)
            }>
            <img src={animal.image} alt={animal.name}/>

            <div>
              <h2>{animal.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {animating && (
        <div>
            <h2>My Experience blah blah blah</h2>
        </div>
      )}
    </div>
  );
}
