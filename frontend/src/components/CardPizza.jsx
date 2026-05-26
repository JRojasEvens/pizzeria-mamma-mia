import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
      }}
    >
    
      <div
        style={{
          background: "linear-gradient(135deg, #fff5f5, #ffe0e0)",
          padding: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={img}
          alt={name}
          onError={(e) => {
            e.target.src = "https://placehold.co/300x300?text=Pizza";
          }}
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #000000",
            boxShadow: "0 4px 12px rgba(220,53,69,0.3)",
          }}
        />
      </div>

   
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: "8px",
        }}
      >
      
        <h5
          style={{
            margin: 0,
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: "1.1rem",
            color: "#1a1a1a",
          }}
        >
          {name}
        </h5>

    
        <p
          style={{
            margin: 0,
            color: "#666",
            fontSize: "0.85rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: "1.4",
          }}
        >
          {desc}
        </p>

   
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {ingredients.map((ing, index) => (
            <span
              key={index}
              style={{
                background: "#fff0f0",
                color: "#000000",
                border: "1px solid #ffcdd2",
                borderRadius: "20px",
                padding: "2px 8px",
                fontSize: "0.7rem",
                fontWeight: "500",
              }}
            >
              {ing}
            </span>
          ))}
        </div>
        <div style={{ flexGrow: 1 }} />

        <p
          style={{
            margin: 0,
            fontWeight: "700",
            fontSize: "1.2rem",
            color: "#000000",
          }}
        >
          ${price.toLocaleString("es-CL")}
        </p>

        <button
          onClick={() => addToCart({ id, name, price, ingredients, img, desc })}
          style={{
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "10px",
            fontWeight: "600",
            fontSize: "0.95rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#b02a37")}
          onMouseLeave={(e) => (e.target.style.background = "#dc3545")}
        >
          🛒 Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;