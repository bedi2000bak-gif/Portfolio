import '../css/About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I'm a self-taught developer focused on full-stack web development. My projects range from a React + Express + PostgreSQL app with JWT authentication to smaller vanilla JavaScript builds — I care more about understanding how each piece works than just gluing frameworks together.
        <br />
        Right now I'm pushing my projects past "works on my machine": deploying them properly and adding real test coverage.
      </p>
    </section>
  );
}

export default About;
