import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/login"      element={<Login />} />
        <Route path="/register"   element={<Register />} />
        <Route path="/cart"       element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile"    element={<Profile />} />
        <Route path="/404"        element={<NotFound />} />
        <Route path="*"           element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;