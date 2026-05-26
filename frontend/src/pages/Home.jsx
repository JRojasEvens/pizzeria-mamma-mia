import { useState, useEffect } from "react";
import CardPizza from "./CardPizza";  

const Home = () => {
 
  const [pizzas, setPizzas] = useState([]);

 
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);  
      })
      .catch((error) => {
        console.error("Error al cargar las pizzas:", error);
      });
  }, []);  

  return (
    <main className="container my-4">
      <h2 className="text-center mb-4">🍕 Nuestras Pizzas</h2>

      {pizzas.length === 0 ? (
        <p className="text-center">Cargando pizzas...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pizza) => (
         
           <CardPizza key={pizza.id} {...pizza} />
           
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;