import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section style={{ textAlign: "center", padding: "60px 20px" }}>
      <div style={{ fontSize: "80px", marginBottom: "20px" }}>404</div>
      <h2>Page Not Found</h2>
      <p style={{ marginBottom: "30px" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
        <Link to="/" className="btn">Go Home</Link>
        <Link to="/projects" className="btn ghost">View Projects</Link>
        <Link to="/contact" className="btn ghost">Contact Me</Link>
      </div>
    </section>
  );
}

export default NotFound;
