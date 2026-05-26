export const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    ingredients: ["Tomate", "Mozzarella", "Albahaca", "Orégano"],
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=640",
    desc: "La clásica pizza italiana.",
  },
  {
    id: 2,
    name: "Española",
    price: 7250,
    ingredients: ["Tomate", "Mozzarella", "Jamón", "Pimiento", "Aceitunas"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/120px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    desc: "Con ingredientes españoles.",
  },
  {
    id: 3,
    name: "Salame",
    price: 5990,
    ingredients: ["Tomate", "Mozzarella", "Salame", "Orégano"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/120px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    desc: "Con salame artesanal.",
  },
  {
    id: 4,
    name: "Hawaiana",
    price: 6500,
    ingredients: ["Tomate", "Mozzarella", "Jamón", "Piña"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/120px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    desc: "Dulce y salada.",
  },
  {
    id: 5,
    name: "Pepperoni",
    price: 6990,
    ingredients: ["Tomate", "Mozzarella", "Pepperoni"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/120px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    desc: "Generosa en pepperoni.",
  },
  {
    id: 6,
    name: "Cuatro Quesos",
    price: 7800,
    ingredients: ["Mozzarella", "Gorgonzola", "Parmesano", "Brie"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/120px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    desc: "Para amantes del queso.",
  },
];

export const pizzaCart = [
  { ...pizzas[0], quantity: 1 },
  { ...pizzas[1], quantity: 1 },
  { ...pizzas[2], quantity: 1 },
];