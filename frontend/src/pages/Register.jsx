import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useUser();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!emailInput || !passwordInput || !confirmPassword) {
      setError("Por favor completa todos los campos");
      return;
    }
    if (passwordInput !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    const result = await register(emailInput, passwordInput);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: "12px",
    border: "1px solid #f0f0f0", background: "#fafafa",
    fontSize: "1rem", outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div style={{ background: "white", borderRadius: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", width: "100%", maxWidth: "420px", overflow: "hidden" }}>

        <div style={{ background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)", padding: "40px 20px", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#dc3545", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 16px", boxShadow: "0 4px 12px rgba(220,53,69,0.4)" }}>
            📝
          </div>
          <h3 style={{ color: "white", margin: 0, fontWeight: "800" }}>Crear Cuenta</h3>
          <p style={{ color: "#888", margin: "4px 0 0", fontSize: "0.85rem" }}>Pizzería Mamma Mía</p>
        </div>

        <div style={{ padding: "32px" }}>

          {error && (
            <div style={{ background: "#fff0f0", border: "1px solid #ffcdd2", borderRadius: "10px", padding: "10px 16px", marginBottom: "16px", color: "#dc3545", fontSize: "0.9rem" }}>
              ⚠️ {error}
            </div>
          )}

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: "600" }}>Email</label>
            <input type="email" placeholder="correo@ejemplo.com" value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)} style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid #dc3545")}
              onBlur={(e) => (e.target.style.border = "1px solid #f0f0f0")} />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: "600" }}>Contraseña</label>
            <input type="password" placeholder="Crea una contraseña" value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)} style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid #dc3545")}
              onBlur={(e) => (e.target.style.border = "1px solid #f0f0f0")} />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: "600" }}>Confirmar Contraseña</label>
            <input type="password" placeholder="Repite tu contraseña" value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid #dc3545")}
              onBlur={(e) => (e.target.style.border = "1px solid #f0f0f0")} />
          </div>

          <button
            onClick={handleRegister}
            style={{ width: "100%", background: "#000000", color: "white", border: "none", borderRadius: "12px", padding: "14px", fontWeight: "700", fontSize: "1rem", cursor: "pointer", marginBottom: "12px" }}
            onMouseEnter={(e) => (e.target.style.background = "#b02a37")}
            onMouseLeave={(e) => (e.target.style.background = "#000000")}
          >
            Registrarse
          </button>

          <p style={{ textAlign: "center", color: "#888", fontSize: "0.9rem", margin: 0 }}>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" style={{ color: "#dc3545", fontWeight: "600", textDecoration: "none" }}>
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;