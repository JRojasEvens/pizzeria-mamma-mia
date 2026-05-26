import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <main style={{ background: "#fafafa", minHeight: "100vh", padding: "40px 20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontWeight: "800",
          fontSize: "2rem",
          color: "#1a1a1a",
        }}
      >
        🍕 Nuestras Pizzas
      </h2>

      {pizzas.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>Cargando pizzas...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "28px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} {...pizza} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;