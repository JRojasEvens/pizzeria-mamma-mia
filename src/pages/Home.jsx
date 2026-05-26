import { pizzas } from "../pizzas";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Nuestras Pizzas</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;