import "./productList.css";
import { db } from '../../data/firebase';
import { Button , Modal, Form} from "react-bootstrap";
import TableDisplay from '../../components/Admin/TableDisplay/TableDisplay'
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { insertNewProduct } from "../../data/adminMetodos";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { getElements} from '../../data/adminMetodos'
import { deleteDoc, doc } from "firebase/firestore"
import Topbar from "../../components/Admin/topbar/Topbar"
import swal from 'sweetalert'

export default function ProductList() { 
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [imagen,setImagen] = useState('');
  const [nombre,setNombre] = useState('');
  const [talla,setTalla] = useState('');
  const [cantidad,setCantidad] = useState(0);
  const [precio,setPrecio] = useState(0);
  const [categoria,setCategoria] = useState('');
  const [descripcion,setDescripcion] = useState('');
  const [marca,setMarca] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  
  async function fetchProductData(){
    const fetchedData = await getElements('Productos')
    setProducts(fetchedData)
  }

  function handleOnSubmit(e){
    e.preventDefault();
    addData(); 
  }

  const handleDelete = async(id) => {
    setProducts(products.filter((item) => item.id !== id));
    await deleteDoc(doc(db, 'Productos', id))
  };

  const columns = useMemo(
    () => [
        {
          Header: 'Id',
          accessor: 'id',
        },
        {
          Header: 'Nombre',
          accessor: 'nombre',
        },
        {
          Header: 'Img',
          accessor: 'img',
          Cell: ({ row }) => (
            <img className="TableRowImg" src={row.values.img} />
          )
        },
        {
          Header: 'Categoria',
          accessor: 'categoria',
        },
        {
          Header: 'Descripcion',
          accessor: 'descripcion',
        },
        {
          Header: 'Talla',
          accessor: 'talla',
        },
        {
          Header: 'Marca',
          accessor: 'marca',
        },
        {
          Header: 'Cantidad',
          accessor: 'cantidad',
        },
        {
          Header: 'Precio',
          accessor: 'precio',
        },
    ],
    []
  )

  const deleteConfirmation = (row) => {
    swal({
      title: "Deseas eliminar de FireBase a: "+row.values.nombre,
      text: "El producto se eliminará permanente de FireBase",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        handleDelete(row.values.id)
        swal("El producto se ha eliminado correctamente!", {
          icon: "success",
        });
      } else {
        swal({title: "Cancelado!", icon: "error"});
      }
    });
  }

  const productsData = useMemo(() => [...products],[products])

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "acciones",
        Header: "Acciones",
        Cell: ({ row }) => (
          <div>
            <Button margin="10px" variant="primary" onClick={() => {deleteConfirmation(row)}}> <BsTrashFill/> </Button>             
                       
            <Link to={`/product/${row.values.id}/${row.values.categoria}`}>
              <Button variant="primary"> <BsPencilFill/> </Button>
            </Link>
          
          </div>        
        ),
      },
    ]);
  };

  function handleOnChange(e){
    const value = e.target.value;
    if(e.target.name === 'img'){
      setImagen(value);
    }
    else if(e.target.name === 'nombre'){
      setNombre(value);
    }
    else if(e.target.name === 'talla'){
      setTalla(value);
    }
    else if(e.target.name === 'cantidad'){
      setCantidad(value);
    }
    else if(e.target.name === 'precio'){
      setPrecio(value);
    }
    else if(e.target.name === 'categoria'){
      setCategoria(value);
    }
    else if(e.target.name === 'descripcion'){
      setDescripcion(value);
    }
    else if(e.target.name === 'marca'){
      setMarca(value);
    }
  }

  function addData(){
    if(imagen !== '' &&
       nombre !== '' &&
       talla  !== '' &&
       categoria !== '' &&      
       precio !== 0 ){
         const product = {
           cantidad: cantidad,
           categoria: categoria,
           descripcion: descripcion,
           img: imagen,
           nombre: nombre,
           precio: precio,
           talla: talla,
           marca: marca
         }
         insertNewProduct(product,'Productos');
        
         //Ahora se resetean los valores de las variables
         setImagen('');
         setNombre('');
         setTalla('');
         setMarca('');
         setCantidad(0);
         setPrecio(0);
         setCategoria('');
         setDescripcion('');

         //TODO: Imprimir un msj donde especifique si se tuvo exito o no en la inserción
         //TODO: Vaciar los inputs (visuales de la página) cuando se haya hecho una inserción exitosa
         //TODO: Analizar qué otras validaciones hacer a los datos al insertar
       }
       else{
         console.log("Datos incompletos")
       }
    //TODO: Crear función de Firebase para agregar los datos
    //TODO: Agregar los datos
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  const funtionSwal = () => {
      swal({
        title: "Producto Creado!",
        text: "El producto se agregó a FireBase!", 
        icon: "success",
      })
  }

  if(productsData)
  return (
    <>
    <Topbar/>
    
    <div className="productList"> 
        <div className="buttonNew">
        <Button variant="primary" onClick={handleShow}>Nuevo producto</Button>
        </div>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
        <Form onSubmit={handleOnSubmit}>
        <div>
          <Form.Group controlId='productFormImg'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control autoFocus name='img' type='text' placeholder='URL de la imágen' onChange={handleOnChange} required/>
          </Form.Group>
          <img src={imagen} className="imgaa"/>
        </div>
        <Form.Group className='mb-3' controlId='productFormNombre'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control name='nombre' type='text' placeholder='Nombre' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormTalla'>
          <Form.Label>Talla</Form.Label>
          <Form.Select name='talla' onChange={handleOnChange}>
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
          <Form.Control name='cantidad' type='number' placeholder='Cantidad' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormPrecio'>
          <Form.Label>Precio</Form.Label>
          <Form.Control name='precio' type='number' placeholder='Precio' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormMarca'>
          <Form.Label>Marca</Form.Label>
          <Form.Control name='marca' type='text' placeholder='Marca' onChange={handleOnChange} required/>
        </Form.Group>

        <Form.Group className='mb-3' controlId='productFormCategoria'>
          <Form.Label>Categoría</Form.Label>
          <Form.Select name='categoria' onChange={handleOnChange}>
            <option value="" selected></option>
            <option value="Adulto">Adultos</option>
            <option value="Niños">Niños</option>
            <option value="Jovenes">Jovenes</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="productFormDescripción">
          <Form.Label>Descripción</Form.Label>
          <Form.Control name="descripcion" as="textarea" rows={3} onChange={handleOnChange}/>
        </Form.Group>        
            <Button variant="primary" type="submit" onClick={funtionSwal}>
              Crear 
            </Button>
      
      </Form>
        </Modal.Body>
      </Modal>

      <TableDisplay 
          columns={columns}
          data={productsData}
          tHooks = {tableHooks}
      />
    </div>
    </> 
  );

}