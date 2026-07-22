import '../css/About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        I left school in 2019 with no idea what I wanted, and spent the next few years finding out the slow way — working with children, a run at primary-teaching studies, a few years in hospitality where I ended up leading shifts, and now a warehouse job here in Karlsruhe. What stuck from all of it: I have a stubborn eye for detail, and software was always the part that came easily to me.
      </p>
      <p>
        In October 2025 I started learning HTML, CSS and JavaScript alongside full-time work — podcasts through every shift, freeCodeCamp in the evenings. It clicked properly with my first bits of JavaScript, seeing what code I had written myself could actually do. In January 2026 I went part-time so I could split the week evenly between the job and learning.
      </p>
      <p>
        I like understanding how things work underneath, not just that they work — which is why I went full-stack. I want to build a project end to end instead of depending on someone else for half of it.
      </p>

      <aside className="now">
        <h3 className="now-label">Right now</h3>
        <p>
          My three main projects are shipped, so the focus is back on fundamentals
          with freeCodeCamp. I'm planning to start a part-time degree at
          FernUniversität Hagen in October.
        </p>
        <p className="now-updated">
          Last updated <time dateTime="2026-07">July 2026</time>
        </p>
      </aside>
    </section>
  );
}

export default About;
