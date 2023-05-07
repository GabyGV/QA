import React from "react";
import { ProductsProvider } from "../../../negocio/context/ProductsContext";
import "./bootstrap.min.css";
import {ProductCard} from './ProductCard.jsx'

function Products({ products }) {
  return (
      <section className="py-5" style={{width: '100%'}}>
        <div className="container" >
          <div className="row mx-auto" style={{width: '100%'}}>
            <div className="col">
              <div
                data-reflow-type="product-list"
                data-reflow-layout="cards"
                data-reflow-order="date_desc"
                data-reflow-product-link="/product.html?product={id}"
              >
                <div className="reflow-product-list ref-cards">
                  <div className="ref-products">
                  <ProductsProvider>
                    {products.map(product => <ProductCard key= {product.id} {...product}/>)}
                    </ProductsProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export { Products };
