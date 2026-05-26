import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4">👤 Mi Perfil</h2>
          <p className="card-text">
            <strong>Email:</strong> usuario@correo.com
          </p>
          <button className="btn btn-danger w-100 mt-3">
            Cerrar sesión
          </button>
          <Link to="/" className="btn btn-secondary w-100 mt-2">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;