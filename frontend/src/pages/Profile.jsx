import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { logout } = useUser();

  return (
    <div
      style={{
        background: "#fafafa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          width: "100%",
          maxWidth: "420px",
          overflow: "hidden",
        }}
      >
        {/* Header con gradiente */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "#dc3545",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              margin: "0 auto 16px",
              boxShadow: "0 4px 12px rgba(220,53,69,0.4)",
            }}
          >
            👤
          </div>
          <h3 style={{ color: "white", margin: 0, fontWeight: "800" }}>
            Mi Perfil
          </h3>
          <p style={{ color: "#888", margin: "4px 0 0", fontSize: "0.85rem" }}>
            Pizzería Mamma Mía
          </p>
        </div>

        {/* Info */}
        <div style={{ padding: "32px" }}>
          
          {/* Email */}
          <div
            style={{
              background: "#fafafa",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "24px",
              border: "1px solid #f0f0f0",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
              Email
            </p>
            <p style={{ margin: "4px 0 0", fontWeight: "600", color: "#1a1a1a", fontSize: "1rem" }}>
              usuario@correo.com
            </p>
          </div>

          {/* Botón cerrar sesión */}
          <button
            onClick={logout}
            style={{
              width: "100%",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "14px",
              fontWeight: "700",
              fontSize: "1rem",
              cursor: "pointer",
              marginBottom: "12px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#b02a37")}
            onMouseLeave={(e) => (e.target.style.background = "#dc3545")}
          >
            🚪 Cerrar sesión
          </button>

          {/* Volver al inicio */}
          <Link
            to="/"
            style={{
              display: "block",
              textAlign: "center",
              background: "#f5f5f5",
              color: "#555",
              textDecoration: "none",
              borderRadius: "12px",
              padding: "14px",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#ebebeb")}
            onMouseLeave={(e) => (e.target.style.background = "#f5f5f5")}
          >
            🏠 Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;