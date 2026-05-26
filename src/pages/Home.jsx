<<<<<<< HEAD
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
=======
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <CardPizza
  name="Napolitana"
  price={5950}
  ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
  img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=640"
/>
<CardPizza
  name="Española"
  price={6950}
  ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
  img="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=640"
/>
<CardPizza
  name="Pepperoni"
  price={6950}
  ingredients={["mozzarella", "pepperoni", "orégano"]}
  img="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=640"
/>
>>>>>>> 9ac80dc65ed5d25a17ce6954cbab570ba115645f
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 9ac80dc65ed5d25a17ce6954cbab570ba115645f
