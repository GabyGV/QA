import { Link,
    useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import "./product.css";
import { getProducts } from "../../data/data";
import { updateProduct } from "../../data/adminMetodos";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap";
import Topbar from "../../components/Admin/topbar/Topbar";
import swal from 'sweetalert'

export default function Product() {
const params = useParams();
const [productD, setProductD] = useState({
       id: "",
       cantidad: 0,
       categoria: "",
       descripcion: "",
       img: "",
       marca: "",
       nombre: "",
       precio: 0,
       talla: "",
})

const handleInputChange = (event) =>{
   setProductD({
       ...productD,
       [event.target.name] : event.target.value
   })
 }

 const sendproducts = (event) =>{
       event.preventDefault();
       const products = {
           cantidad: productD.cantidad,
           categoria: productD.categoria,
           descripcion: productD.descripcion,
           marca: productD.marca,
           id: productD.id,
           img: productD.img,
           nombre: productD.nombre,
           precio: productD.precio,
           talla:  productD.talla
         }
       updateProduct(products);
 }

async function fetchProductData(){                
   const variable = await getProducts()
   const selectProduct = variable.find(producto => producto.id === params.productId) 
   setProductD(selectProduct)    
}


useEffect(() => {
   fetchProductData()              
}, [])

const updateConfirmation = (event, product) => {
  console.log(product)
  swal({
    title: "Estas seguro que quieres actualizar este producto?",
    text: "El producto se actualizará en FireBase!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      sendproducts(event)
      swal("El producto se ha actualizado correctamente!", {
        icon: "success",
      });
      window.location.href = "/products"
    } else {
      swal({title: "Cancelado!", icon: "error"});
    }
  });
}

return (
  <>
  <Topbar/>
  
  <Container className="modify">
 <div className="d-inline-flex p-2 flex-column border rounded justify-content-center">
      <h1 className="display-2">Modificar Producto</h1>
      <Form onSubmit={sendproducts}>
        <div className="NewProduct-DivDisplay">
          <Form.Group className='mb-3 DivDisplay-ImgField' controlId='productFormImg'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control name='img' type='text' placeholder={productD.img} onChange={handleInputChange}/>
          </Form.Group>
          <img src={productD.img} className="imgaa"/>
        </div>
        <Form.Group className='mb-3' controlId='productFormNombre'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control name='nombre' type='text' placeholder={productD.nombre} onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormTalla'>
          <Form.Label>Talla</Form.Label>
          <Form.Select name='talla' onChange={handleInputChange}>
            <option value="" selected></option>
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormCantidad'>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control name='cantidad' type='number' placeholder={productD.cantidad} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormPrecio'>
          <Form.Label>Precio</Form.Label>
          <Form.Control name='precio' type='number' placeholder={productD.precio} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormMarca'>
          <Form.Label>Marca</Form.Label>
          <Form.Control name='marca' type='text' placeholder={productD.marca} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormCategoria'>
          <Form.Label>Categoría</Form.Label>
          <Form.Select name='categoria' onChange={handleInputChange}>
            <option value="" selected></option>
            <option value="Adulto">Adultos</option>
            <option value="Niños">Niños</option>
            <option value="Jovenes">Jovenes</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="productFormDescripción">
          <Form.Label>Descripción</Form.Label>
          <Form.Control name='descripcion' type='text' placeholder={productD.descripcion} onChange={handleInputChange} />
        </Form.Group>        

        <Button variant="primary" type="submit" className="btn" onClick={(event) => {updateConfirmation(event, productD)}}>
          Actualizar
        </Button>
      </Form>      
    </div>
    </Container>
    </>
);
}