<<<<<<< HEAD
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
=======
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
>>>>>>> 9ac80dc65ed5d25a17ce6954cbab570ba115645f
