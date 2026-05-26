import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, total } = useCart();
  const { token } = useUser();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div style={{ background: "#fafafa", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ background: "white", borderRadius: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", padding: "60px 40px", textAlign: "center", maxWidth: "420px", width: "100%" }}>
          <p style={{ fontSize: "4rem", margin: 0 }}>✅</p>
          <h3 style={{ fontWeight: "800", margin: "16px 0 8px" }}>¡Compra realizada!</h3>
          <p style={{ color: "#888", marginBottom: "24px" }}>Tu pedido ha sido procesado con éxito.</p>
          <Link to="/" style={{ display: "inline-block", background: "#dc3545", color: "white", textDecoration: "none", padding: "12px 28px", borderRadius: "12px", fontWeight: "700" }}>
            🍕 Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <h2 style={{ fontWeight: "800", fontSize: "2rem", marginBottom: "32px", color: "#1a1a1a" }}>
          🛒 Mi Carrito
        </h2>

        {cart.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
            <p style={{ fontSize: "4rem", margin: 0 }}>🍕</p>
            <h4 style={{ color: "#555", marginTop: "16px" }}>Tu carrito está vacío</h4>
            <p style={{ color: "#888" }}>¡Agrega algunas pizzas!</p>
            <Link to="/" style={{ display: "inline-block", marginTop: "12px", background: "#000000", color: "white", textDecoration: "none", padding: "10px 24px", borderRadius: "10px", fontWeight: "600" }}>
              Ver pizzas
            </Link>
          </div>
        ) : (
          <>
            <div style={{ background: "white", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", overflow: "hidden" }}>
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px", borderBottom: index < cart.length - 1 ? "1px solid #f0f0f0" : "none", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fffafa")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    onError={(e) => { e.target.src = "https://placehold.co/80x80?text=Pizza"; }}
                    style={{ width: "72px", height: "72px", borderRadius: "50%", objectFit: "cover", border: "3px solid #dc3545", flexShrink: 0 }}
                  />

                  <div style={{ flexGrow: 1 }}>
                    <h6 style={{ margin: 0, fontWeight: "700", textTransform: "capitalize", color: "#1a1a1a", fontSize: "1rem" }}>
                      {item.name}
                    </h6>
                    <p style={{ margin: "4px 0 0", color: "#888", fontSize: "0.85rem" }}>
                      ${item.price.toLocaleString("es-CL")} c/u
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#f5f5f5", borderRadius: "20px", padding: "6px 12px" }}>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={{ background: "white", border: "1px solid #ddd", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer", fontWeight: "700", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#555" }}
                    >
                      −
                    </button>
                    <span style={{ fontWeight: "700", minWidth: "20px", textAlign: "center" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={{ background: "#000000", border: "none", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer", fontWeight: "700", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}
                    >
                      +
                    </button>
                  </div>

                  <div style={{ minWidth: "100px", textAlign: "right", fontWeight: "700", color: "#dc3545", fontSize: "1rem" }}>
                    ${(item.price * item.quantity).toLocaleString("es-CL")}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    title="Eliminar"
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem", color: "#ccc", transition: "color 0.2s", padding: "4px" }}
                    onMouseEnter={(e) => (e.target.style.color = "#dc3545")}
                    onMouseLeave={(e) => (e.target.style.color = "#ccc")}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "20px", background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)", borderRadius: "16px", padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
              <div>
                <p style={{ color: "#888", margin: 0, fontSize: "0.85rem" }}>
                  {cart.reduce((acc, i) => acc + i.quantity, 0)} productos
                </p>
                <h4 style={{ color: "white", margin: 0, fontWeight: "800" }}>
                  Total a pagar
                </h4>
                <h3 style={{ color: "#dc3545", margin: "4px 0 0", fontWeight: "800", fontSize: "1.8rem" }}>
                  ${total.toLocaleString("es-CL")}
                </h3>
              </div>

              <button
                onClick={handleCheckout}
                disabled={!token || loading}
                style={{
                  background: token ? "#dc3545" : "#555",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontWeight: "700",
                  fontSize: "1rem",
                  cursor: token ? "pointer" : "not-allowed",
                  opacity: token ? 1 : 0.6,
                  transition: "background 0.2s",
                }}
              >
                {loading ? "Procesando..." : token ? "💳 Pagar" : "🔒 Inicia sesión para pagar"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;