import { Link } from "react-router-dom"; 
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ background: "white", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.2s", cursor: "pointer" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
    >
   
      <Link to={`/pizza/${id}`}>
        <div style={{ background: "linear-gradient(135deg, #fff5f5, #ffe0e0)", padding: "24px", display: "flex", justifyContent: "center" }}>
          <img
            src={img}
            alt={name}
            onError={(e) => { e.target.src = "https://placehold.co/300x300?text=Pizza"; }}
            style={{ width: "130px", height: "130px", borderRadius: "50%", objectFit: "cover", border: "4px solid #000000" }}
          />
        </div>
      </Link>

      <div style={{ padding: "16px", display: "flex", flexDirection: "column", flexGrow: 1, gap: "8px" }}>
        <Link to={`/pizza/${id}`} style={{ textDecoration: "none" }}>
          <h5 style={{ margin: 0, textTransform: "capitalize", fontWeight: "700", color: "#1a1a1a" }}>{name}</h5>
        </Link>
        <p style={{ margin: 0, color: "#666", fontSize: "0.85rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {ingredients.map((ing, i) => (
            <span key={i} style={{ background: "#fff0f0", color: "#000000", border: "1px solid #ffcdd2", borderRadius: "20px", padding: "2px 8px", fontSize: "0.7rem" }}>{ing}</span>
          ))}
        </div>
        <div style={{ flexGrow: 1 }} />
        <p style={{ margin: 0, fontWeight: "700", fontSize: "1.2rem", color: "#000000" }}>${price.toLocaleString("es-CL")}</p>
        <button
          onClick={() => addToCart({ id, name, price, ingredients, img, desc })}
          style={{ background: "#000000", color: "white", border: "none", borderRadius: "10px", padding: "10px", fontWeight: "600", cursor: "pointer" }}
        >
          🛒 Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;