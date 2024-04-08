import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container navbar-grid">
          <h1>one page</h1>

          <nav>
            <a href="#" className="active">
              Home
            </a>
            <a href="#">Servicios</a>
            <a href="#">Portfolio</a>
            <a href="#">Equipo</a>
            <a href="#">Contacto</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
