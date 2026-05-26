import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pizza from "./components/Pizza";
// import Home from "./components/Home";  ← comentado
// import Cart from "./components/Cart";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Pizza />
      {/* <Home /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default App;