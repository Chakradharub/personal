import { Link } from "react-router-dom";

function Personal() {
  return (
    <main className="personal-page">

      <nav className="top-navigation">
        <Link to="/professional" className="switch-link">
          ← Switch to Professional
        </Link>
      </nav>

      <section className="personal-content">

        <p className="section-label">PERSONAL</p>

        <h1>
          Me, outside of work.
        </h1>

        <p className="personal-introduction">
          This is where I talk about who I am outside of my
          professional life.
        </p>

        <section className="personal-section">
          <h2>About me</h2>

          <p>
            Write about yourself here. This could include your
            interests, hobbies, passions, travel, family, music,
            photography, or anything else you'd like people to know.
          </p>
        </section>

        <section className="personal-section">
          <h2>Life outside work</h2>

          <p>
            Add whatever you want here about your life outside
            your career.
          </p>
        </section>

      </section>

    </main>
  );
}

export default Personal;
