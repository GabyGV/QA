import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const CarritoContext = createContext();

const useCarrito = () => {
  const context = useContext(CarritoContext);
  return context;
};

function CarritoProvider({ carrito, children }) {
  const { user } = useAuth();
  carrito.usuario = user.uid;
  const [aux, setAux] = useState(carrito);
  const [totalCarrito, setTotalCarrito] = useState(carrito.total);

  const agregarAlCarro = (producto, cantidad, talla) => {
    if (carrito.productos.find((p) => p.articulo.id === producto.id)) {
      const newProductos = carrito.productos.map((p) => {
        if (p.articulo.id === producto.id) {
          p.cantidad = p.cantidad + cantidad;
          p.totalArticulo = p.totalArticulo + producto.precio * cantidad;
          carrito.total = carrito.total + producto.precio * cantidad
        }
        return p;
      });
      carrito.productos = newProductos;
    } else {
      carrito.productos.push({
        cantidad: cantidad,
        articulo: producto,
        talla: talla,
        totalArticulo: producto.precio * cantidad,
      });
      carrito.total = carrito.total + producto.precio * cantidad
    }
    //console.log(carrito); 
  };

  const borrarDelCarro = (id) => {
    const {totalArticulo} = carrito.productos.find((p) => p.articulo.id === id)
    const newProductos = carrito.productos.filter((p) => p.articulo.id !== id);
    carrito.productos = newProductos;
    carrito.total = carrito.total - totalArticulo
    setAux({
      ...carrito,
      productos: newProductos,
    });
    
  };

  const cambiarCant = (id, accion) => {
    const newProductos = carrito.productos.map((p) => {
      if (p.articulo.id === id) {
        if (accion) {
          p.cantidad = p.cantidad + 1;
          carrito.total = carrito.total + p.articulo.precio;
        } else {
          p.cantidad = p.cantidad - 1;
          carrito.total = carrito.total - p.articulo.precio;
        }
        p.totalArticulo = p.articulo.precio * p.cantidad;
      }
      return p;
    });
    carrito.productos = newProductos;
    setTotalCarrito(carrito.total)
    //console.log(carrito);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarro, borrarDelCarro, cambiarCant, aux, totalCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export { CarritoProvider, useCarrito };
