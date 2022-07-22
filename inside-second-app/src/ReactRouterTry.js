import { Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function ReactRouterTry() {
  return (
    <div>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Switch>
    </div>
  );
}

export default ReactRouterTry;
