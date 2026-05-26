import { Link } from "react-router-dom";

const Login = () => {
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
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
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
            🔐
          </div>
          <h3 style={{ color: "white", margin: 0, fontWeight: "800" }}>
            Iniciar Sesión
          </h3>
          <p style={{ color: "#888", margin: "4px 0 0", fontSize: "0.85rem" }}>
            Pizzería Mamma Mía
          </p>
        </div>

        <div style={{ padding: "32px" }}>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.75rem",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1px solid #f0f0f0",
                background: "#fafafa",
                fontSize: "1rem",
                outline: "none",
                boxSizing: "border-box",
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #dc3545")}
              onBlur={(e) => (e.target.style.border = "1px solid #f0f0f0")}
            />
          </div>

         
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.75rem",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Tu contraseña"
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1px solid #f0f0f0",
                background: "#fafafa",
                fontSize: "1rem",
                outline: "none",
                boxSizing: "border-box",
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #dc3545")}
              onBlur={(e) => (e.target.style.border = "1px solid #f0f0f0")}
            />
          </div>

    
          <button
            style={{
              width: "100%",
              background: "#000000",
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
            onMouseLeave={(e) => (e.target.style.background = "#000000")}
          >
            Iniciar Sesión
          </button>

         
          <p style={{ textAlign: "center", color: "#888", fontSize: "0.9rem", margin: 0 }}>
            ¿No tienes cuenta?{" "}
            <Link to="/register" style={{ color: "#dc3545", fontWeight: "600", textDecoration: "none" }}>
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;