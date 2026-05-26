import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
        padding: "0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link
        to="/"
        style={{
          color: "#dc3545",
          fontWeight: "800",
          fontSize: "1.3rem",
          textDecoration: "none",
          letterSpacing: "0.5px",
        }}
      >
        🍕 Pizzería Mamma Mía
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {[
          { to: "/", label: "Home" },
          { to: "/login", label: "Login" },
          { to: "/register", label: "Register" },
          { to: "/profile", label: "Profile" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              color: "#ccc",
              textDecoration: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: "500",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ffffff15";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#ccc";
            }}
          >
            {label}
          </Link>
        ))}

        <Link
          to="/cart"
          style={{
            background: "#dc3545",
            color: "white",
            textDecoration: "none",
            padding: "8px 18px",
            borderRadius: "20px",
            fontWeight: "700",
            fontSize: "0.9rem",
            marginLeft: "8px",
            boxShadow: "0 2px 8px rgba(220,53,69,0.4)",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#b02a37";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#dc3545";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;