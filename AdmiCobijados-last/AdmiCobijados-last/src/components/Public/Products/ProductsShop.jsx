import React  from "react";
import { Footer } from "../shared/Footer";
import { Header } from "../shared/Header";
import { Products } from "./Products";
import { useProducts } from "../../../negocio/context/ProductsContext";
import { NavLink, useParams } from "react-router-dom";

function ProductsShop() {
  const { categoria } = useParams();
  const { products } = useProducts();
  let productsCategoria = null

  if (categoria !== 'todos') {
    productsCategoria = products.filter((producto) => {
    return producto.categoria === categoria})
  } else {
    productsCategoria = products
  }

  return (
    <div>
      <Header />
      <div style={{ margin: "25px" }}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold " : ""}`
              }
              aria-current="page"
              to="/products/todos"
            >
              Todos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold" : ""}`
              }
              aria-current="page"
              to="/products/mujeres"
            >
              Mujeres
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold" : ""}`
              }
              aria-current="page"
              to="/products/hombres"
            >
              Hombres
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold" : ""}`
              }
              aria-current="page"
              to="/products/niños"
            >
              Niños
            </NavLink>
          </li>
        </ul>
      </div>
      {<Products products={productsCategoria} />}
      <Footer />
    </div>
  );
}

export { ProductsShop };
