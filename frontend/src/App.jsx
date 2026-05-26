import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const PrivateRoute = ({ children }) => {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { token } = useUser();
  return !token ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"    element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/profile"  element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/cart"        element={<Cart />} />
        <Route path="/pizza/:id"   element={<Pizza />} />
        <Route path="/404"         element={<NotFound />} />
        <Route path="*"            element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;