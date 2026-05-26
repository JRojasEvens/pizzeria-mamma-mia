import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);
  const increase = (id) => {
    setCart(cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ));
  };
  const decrease = (id) => {
    setCart(cart.map((p) =>
      p.id === id && p.quantity > 0
        ? { ...p, quantity: p.quantity - 1 }
        : p
    ));
  };
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="container my-4">
      <div className="card p-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h4 className="mb-3">Detalles del pedido:</h4>
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className="d-flex align-items-center justify-content-between mb-3"
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <span>{pizza.name}</span>
            </div>
            <span>${pizza.price.toLocaleString("es-CL")}</span>
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => decrease(pizza.id)}
                disabled={pizza.quantity === 0}
              >
                -
              </button>
              <span>{pizza.quantity}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => increase(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <hr />
        <h5 className="mb-3">
          <strong>Total: ${total.toLocaleString("es-CL")}</strong>
        </h5>
        <button className="btn btn-secondary">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;