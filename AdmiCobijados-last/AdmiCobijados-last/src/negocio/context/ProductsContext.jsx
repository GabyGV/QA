import React, {createContext, useState, useEffect, useContext} from 'react'
import { getCollection } from "../../data/getCollection"

const ProductsContext = createContext();

const useProducts = () => {
    const context = useContext(ProductsContext);
    return context;
  };

function ProductsProvider({children}) {
  const [products, setProducts] = useState([]);

  const obtenerProductos = async () => {
    const products = await getCollection("Productos");
    setProducts(products);
  };

  const productoActual = (id) => products.find((p) => p.id === id);

  useEffect(() => {
    obtenerProductos();
    console.log('peticion')
  }, []); 

  return (
    <ProductsContext.Provider value={{products, productoActual}}>
        {children}
    </ProductsContext.Provider>
  )
}

export {ProductsProvider, useProducts}