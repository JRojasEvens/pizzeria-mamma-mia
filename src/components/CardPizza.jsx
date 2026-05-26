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
      </div>
    </div>
  );
};

export default CardPizza;