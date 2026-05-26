import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();  
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`) 
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error:", err));
  }, [id]); 

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <main style={{ background: "#fafafa", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex" }}>
        
        <div style={{ flex: 1 }}>
          <img
            src={pizza.img}
            alt={pizza.name}
            onError={(e) => { e.target.src = "https://placehold.co/500x400?text=Pizza"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2 style={{ fontWeight: "800", textTransform: "capitalize", color: "#1a1a1a", margin: 0 }}>
            {pizza.name}
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6", margin: 0 }}>{pizza.desc}</p>

          <div>
            <h6 style={{ fontWeight: "700", marginBottom: "8px" }}>Ingredientes:</h6>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {pizza.ingredients.map((ing, i) => (
                <span key={i} style={{ background: "#fff0f0", color: "#000000", border: "1px solid #ffcdd2", borderRadius: "20px", padding: "4px 10px", fontSize: "0.8rem" }}>
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <h3 style={{ color: "#000000", fontWeight: "800", margin: 0 }}>
            ${pizza.price.toLocaleString("es-CL")}
          </h3>

          <button
            onClick={() => addToCart(pizza)}
            style={{ background: "#000000", color: "white", border: "none", borderRadius: "10px", padding: "14px", fontWeight: "700", fontSize: "1rem", cursor: "pointer" }}
          >
            🛒 Añadir al carrito
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pizza;