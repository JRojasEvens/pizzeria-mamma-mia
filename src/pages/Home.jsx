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
      </div>
    </div>
  );
};

export default Home;
