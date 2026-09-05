import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Professional() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") || "Guest";

  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    setDisplayedName("");

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedName(name.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [name]);

  return (
    <main className="professional-page">

      <nav className="top-navigation">
        <Link to="/personal" className="switch-link">
          Switch to Personal →
        </Link>
      </nav>

      <section className="professional-content">

        <div className="hello-section">
          <div className="matrix-symbol">&gt;_</div>

          <h1>
            Hello{" "}
            <span className="typed-name">
              {displayedName}
              <span className="cursor">█</span>
            </span>
          </h1>

          <p className="intro-text">
            Welcome to my professional space.
          </p>
        </div>

        <section className="cv-section">

          <div className="cv-placeholder">
            <h2>Curriculum Vitae</h2>

            <p>
              This is where your CV will go.
            </p>

            <div className="cv-content">
              <div>
                <h3>Experience</h3>
                <p>
                  Your professional experience will go here.
                </p>
              </div>

              <div>
                <h3>Education</h3>
                <p>
                  Your education will go here.
                </p>
              </div>

              <div>
                <h3>Skills</h3>
                <p>
                  Your skills will go here.
                </p>
              </div>
            </div>
          </div>

        </section>

      </section>

    </main>
  );
}

export default Professional;
