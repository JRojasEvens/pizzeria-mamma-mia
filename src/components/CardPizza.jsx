<<<<<<< HEAD
const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toLocaleString("es-CL")}
        </p>
        <h6>Ingredientes:</h6>
        <ul>
          {ingredients.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
        <button className="btn btn-danger w-100 mt-2">
          Añadir al carrito
        </button>
=======
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
>>>>>>> 9ac80dc65ed5d25a17ce6954cbab570ba115645f
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default CardPizza;
=======
export default CardPizza;
>>>>>>> 9ac80dc65ed5d25a17ce6954cbab570ba115645f
