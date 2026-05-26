import { formatPrice } from "../utils/helpers";


const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "100%", maxWidth: "320px" }}>
    
      <img
        src={img}
        alt={name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <p className="text-muted text-center" style={{ fontSize: "0.85rem" }}>
          Ingredientes:
        </p>
        <p className="text-center" style={{ fontSize: "0.85rem" }}>
          🍕 {ingredients.join(", ")}
        </p>
        <p className="text-center fw-bold">Precio: ${formatPrice(price)}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
