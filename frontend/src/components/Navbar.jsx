import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  const linkStyle = {
    color: "#ccc", textDecoration: "none", padding: "8px 14px",
    borderRadius: "8px", fontSize: "0.9rem", fontWeight: "500",
  };

  const btnStyle = (bg) => ({
    background: bg, color: "white", textDecoration: "none",
    padding: "8px 18px", borderRadius: "20px", fontWeight: "700",
    fontSize: "0.9rem", border: "none", cursor: "pointer",
  });

  return (
    <nav style={{ background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", boxShadow: "0 2px 12px rgba(0,0,0,0.3)", position: "sticky", top: 0, zIndex: 1000 }}>
      
      <Link to="/" style={{ color: "#dc3545", fontWeight: "800", fontSize: "1.3rem", textDecoration: "none" }}>
        🍕 Pizzería Mamma Mía
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
         
        <Link to="/" style={linkStyle}>Home</Link>
        {token ? (
          <>
            <Link to="/profile" style={linkStyle}>Profile</Link>
            <button onClick={logout} style={btnStyle("#555")}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        )}
    <Link to="/cart" style={btnStyle("#dc3545")}>
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;