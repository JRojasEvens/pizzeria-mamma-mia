const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">🔐 Iniciar Sesión</h2>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Tu contraseña"
                />
              </div>

              <button className="btn btn-danger w-100 mt-2">
                Iniciar Sesión
              </button>

              <p className="text-center mt-3">
                ¿No tienes cuenta?{" "}
                <a href="/register">Regístrate aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;