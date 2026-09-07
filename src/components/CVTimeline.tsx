import { useState, type ChangeEvent } from "react";

type Experience = {
  year: number;
  title: string;
  company: string;
  description: string;
};

const experiences: Experience[] = [
  {
    year: 2022,
    title: "Starting Point",
    company: "Your Organisation",
    description:
      "Describe where your professional journey began.",
  },
  {
    year: 2023,
    title: "Earlier Experience",
    company: "Your Company",
    description:
      "Describe what you were doing and what you learned during this period.",
  },
  {
    year: 2024,
    title: "Professional Development",
    company: "Your Organisation",
    description:
      "Describe the projects, responsibilities, qualifications, or experiences you gained.",
  },
  {
    year: 2025,
    title: "Previous Role",
    company: "Previous Company",
    description:
      "Describe the experience and skills you gained during this year.",
  },
  {
    year: 2026,
    title: "Current Role",
    company: "Your Company",
    description:
      "Describe what you are currently doing, your responsibilities, and what you are learning.",
  },
];

function CVTimeline() {
  // Start at the newest year
  const [selectedIndex, setSelectedIndex] = useState(
    experiences.length - 1
  );

  const selectedExperience = experiences[selectedIndex];

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.value);
    setSelectedIndex(index);
  };

  return (
    <section className="cv-timeline">

      {/* Timeline */}
      <div className="timeline-container">

        <div className="timeline-line" />

        {/* Slider */}
        <input
          type="range"
          min="0"
          max={experiences.length - 1}
          step="1"
          value={selectedIndex}
          onChange={handleSliderChange}
          className="timeline-slider"
          aria-label="CV timeline"
        />

        {/* Years */}
        <div className="timeline-years">

          {experiences.map((experience, index) => (
            <button key={experience.year} className={`timeline-year ${selectedIndex === index ? "active" : ""}`} onClick={() => setSelectedIndex(index)}>
              {experience.year}
            </button>
          ))}

        </div>

      </div>

      {/* Experience */}
      <div className="timeline-content" key={selectedExperience.year}>
        <div className="timeline-year-display">
          {selectedExperience.year}
        </div>

        <h3>
          {selectedExperience.title}
        </h3>

        <p className="timeline-company">
          {selectedExperience.company}
        </p>

        <p className="timeline-description">
          {selectedExperience.description}
        </p>
      </div>

    </section>
  );
}

export default CVTimeline;
