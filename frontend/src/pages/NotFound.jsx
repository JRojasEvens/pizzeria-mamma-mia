import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 style={{ fontSize: "8rem" }}>404</h1>
      <h2>¡Página no encontrada!</h2>
      <p className="text-muted">La página que buscas no existe.</p>
      <Link to="/" className="btn btn-danger btn-lg mt-3">
        🏠 Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;