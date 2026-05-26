import { formatPrice } from "../utils/helpers";

const Navbar = () => {
  const total = 25000;
  const token = false;  

  return (
    <nav
      style={{
        background: "#1a1a1a",
        padding: "0.75rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}>
        🍕 Pizzería Mamma Mia!
      </span>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button className="btn btn-secondary btn-sm">🍕 Home</button>{token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
            <button className="btn btn-outline-light btn-sm">🔐 Register</button>
          </>
        )}
      </div>
      <button className="btn btn-warning btn-sm">
        🛒 Total: ${formatPrice(total)}
      </button>
    </nav>
  );
};

export default Navbar;
