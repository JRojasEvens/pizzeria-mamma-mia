import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => {
        setPizza(data);
      })
      .catch((error) => {
        console.error("Error al cargar la pizza:", error);
      });
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <main className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded shadow"
            onError={(e) => {
              e.target.src = "https://placehold.co/500x400?text=Pizza";
            }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">{pizza.name}</h2>
          <p className="text-muted">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingrediente, index) => (
              <li key={index}>🍕 {ingrediente}</li>
            ))}
          </ul>
          <h4 className="mt-3">
            Precio: <span className="text-success">
              ${pizza.price.toLocaleString("es-CL")}
            </span>
          </h4>

          <button
            className="btn btn-warning btn-lg mt-3"
            onClick={() => addToCart(pizza)}
          >
            🛒 Añadir al carrito
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pizza;