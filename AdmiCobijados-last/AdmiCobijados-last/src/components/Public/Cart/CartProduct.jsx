import React, { useState } from "react";
import { useCarrito } from "../../../negocio/context/CarritoContext";

function CartProduct({ articulo, cantidad, talla, totalArticulo }) {
  const { cambiarCant, borrarDelCarro } = useCarrito();
  let [cant, setCant] = useState(cantidad);
  let [total, setTotal] = useState(totalArticulo);

  const handleCant = (accion) => {
    if (accion === "increase") {
      if (cant !== articulo.cantidad) {
        setCant((cant += 1));
        cambiarCant(articulo.id, true);
      }
    } else if (accion === "decrease") {
      if (cant !== 1) {
        setCant((cant -= 1));
        cambiarCant(articulo.id, false);
      }
    }
    setTotal(articulo.precio * cant);
  };

  return (
    <div
      className="ref-product"
      data-id="1233532930"
      data-quantity="1"
      data-variant_id="199976733_s"
    >
      <div className="ref-product-col">
        <div className="ref-product-wrapper">
          <img
            className="ref-product-photo"
            src={articulo.img}
            alt="Jany Little"
          />
          <div className="ref-product-data">
            <div className="ref-product-info">
              <div className="ref-product-name">{articulo.nombre}</div>
              <div className="ref-product-category">
                Categoria: {articulo.categoria}
              </div>
              <div className="ref-product-variants">
                <div className="ref-product-variant">Talla: {talla}</div>
              </div>
              <div className="ref-product-personalization-holder"></div>
            </div>
            <div className="ref-product-price">{articulo.precio}</div>
          </div>
        </div>
        <div className="ref-product-controls">
          <div className="ref-product-quantity">
            <div
              className="ref-quantity-container"
              data-reflow-variant="199976733_s"
              data-reflow-product="1233532930"
              data-reflow-max-qty="999"
              data-reflow-quantity="1"
            >
              <div className="ref-quantity-widget">
                <div
                  className="ref-decrease"
                  onClick={() => {
                    handleCant("decrease");
                  }}
                >
                  <span></span>
                </div>
                <div
                  type="text"
                  style={{
                    width: "35px",
                    justifyContent: "center",
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  {cant}
                </div>
                <div
                  className="ref-increase"
                  onClick={() => {
                    handleCant("increase");
                  }}
                >
                  <span></span>
                </div>
              </div>
            </div>
            <div
              className="ref-product-remove"
              onClick={() => {
                borrarDelCarro(articulo.id);
              }}
            >
              Remover
            </div>
          </div>
          <div className="ref-product-total">
            <div className="ref-product-total-sum">{total}</div>
          </div>
        </div>
      </div>
      <div className="ref-price-col">
        <div className="ref-product-price">{articulo.precio}</div>
      </div>
      <div className="ref-quantity-col">
        <div className="ref-product-quantity">
          <div
            className="ref-quantity-container"
            data-reflow-variant="199976733_s"
            data-reflow-product="1233532930"
            data-reflow-max-qty="999"
            data-reflow-quantity="1"
          >
            <div className="ref-quantity-widget">
              <div
                className="ref-decrease"
                onClick={() => {
                  handleCant("decrease");
                }}
              >
                <span></span>
              </div>
              <div
                type="text"
                style={{
                  width: "35px",
                  justifyContent: "center",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                {cant}
              </div>
              <div
                className="ref-increase"
                onClick={() => {
                  handleCant("increase");
                }}
              >
                <span></span>
              </div>
            </div>
          </div>
          <div className="ref-product-qty-message"></div>
          <div
            className="ref-product-remove"
            onClick={() => {
              borrarDelCarro(articulo.id);
            }}
          >
            Remover
          </div>
        </div>
      </div>
      <div className="ref-total-col">
        <div className="ref-product-total">
          <div className="ref-product-total-sum">{total}</div>
        </div>
      </div>
    </div>
  );
}

export { CartProduct };
