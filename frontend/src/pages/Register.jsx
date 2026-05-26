const Register = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">📝 Crear Cuenta</h2>

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
                  placeholder="Crea una contraseña"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirmar Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repite tu contraseña"
                />
              </div>

              <button className="btn btn-danger w-100 mt-2">
                Registrarse
              </button>

              <p className="text-center mt-3">
                ¿Ya tienes cuenta?{" "}
                <a href="/login">Inicia sesión aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;