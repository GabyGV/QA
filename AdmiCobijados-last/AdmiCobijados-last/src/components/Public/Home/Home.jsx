import { Header } from "../shared/Header";
import { CarouselBanner } from "./CarouselBanner"
import { Novedades } from "./Novedades/Novedades"
import { Footer } from "../shared/Footer"
import { Products } from "../Products/Products";
import { useProducts } from "../../../negocio/context/ProductsContext";

export function Home() {
  const { products } = useProducts();
  
  const novedades = products.filter((producto) => {
    return producto.precio < 12000
  })

  novedades.splice(3)

  return (
    <div>
      <Header/>
      <CarouselBanner/>
      <Novedades>
        <Products products={novedades}/>
      </Novedades>
      <Footer/>
    </div>
  );
}
