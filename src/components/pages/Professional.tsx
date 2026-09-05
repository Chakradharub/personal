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

  <Link to="/" className="home-icon" aria-label="Return to character selection" title="Character selection">
    ⌂
  </Link>

  <Link to={`/personal?name=${encodeURIComponent(name)}`} className="switch-link">
    Switch to Personal
  </Link>

</nav>
      <section className="professional-content">
        <div className="hello-section">
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

        {/* About Me */}
        <section className="about-section">

          <div className="section-heading">
            <span className="section-number">
              01
            </span>

            <h2>
              About Me
            </h2>
          </div>

          <div className="about-content">
            <div className="about-main">
              <p>
               Something
              </p>
            </div>

            <div className="about-details">
              <div className="detail">
                <span>Based in </span>
                <strong>Newcastle upon Tyne(The Toon), England</strong>
              </div>
              <div className="detail">
                <span>Specialisation </span>
                <strong>Full Stack Developer who hates CSS</strong>
              </div>
              <div className="detail">
                <span>Experience </span>
                <strong>Almost 5 Years</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CV */}
        <section className="cv-section">
          <div className="section-heading">
            <span className="section-number">
              02
            </span>

            <h2>
              Curriculum Vitae
            </h2>
          </div>

          <div className="cv-placeholder">

            <p>
              CV here.
            </p>

            <div className="cv-content">
              <div>
                <h3>
                  Experience
                </h3>
                <p>
                  exp here.
                </p>
              </div>
              <div>
                <h3>
                  Education
                </h3>
                <p>
                  education here.
                </p>
              </div>
              <div>
                <h3>
                  Skills
                </h3>
                <p>
                  skills here.
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
