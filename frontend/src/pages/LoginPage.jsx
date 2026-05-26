import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const validEmail = "usuario@gmail.com";
  const validPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    
    if (password.length < 6) {
      alert("La contraseña debe contener 6 minimo caracteres!");
      return;
    }

   
    if (email === validEmail && password === validPassword) {
      alert("Bienvenido 🍕");
    } else {
      alert("Email o contraseña incorrectos ❌");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "1rem" }}>
      <h2>Login</h2>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Ingresa tu contraseñad"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;