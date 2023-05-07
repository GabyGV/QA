import React from "react";
import "./Novedades.css";

function Novedades({ children }) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <p className="tituloNovedades">Novedades</p>
      </div>
      <div style={{ width: '100%', display: "flex", justifyContent: 'center' }}>{children}</div>
    </div>
  );
}

export { Novedades };
