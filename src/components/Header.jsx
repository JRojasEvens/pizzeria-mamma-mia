const Header = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />
      <div style={{ position: "relative", textAlign: "center", color: "#fff" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          ¡Pizzería Mamma Mia!
        </h1>
        <p style={{ fontSize: "1.1rem" }}>
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </div>
  );
};

export default Header;
