import "./user.css";
import {useParams } from "react-router-dom";
import Topbar from "../../components/Admin/topbar/Topbar";
import { getSpecificDoc } from "../../data/data";
import { getDocsWithQuery } from "../../data/data";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FcKindle } from "react-icons/fc";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function User() {
  const params = useParams();
  const [userData, setUserData] = useState({})
  const [comprasUsuario, setComprasUsuario] = useState([{}])
  // const [show, setShow] = useState(false);
  
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);  
  
  async function fetchUserData(){
    setUserData(await getSpecificDoc('Usuarios',params.userId))
    setComprasUsuario(await getDocsWithQuery('Facturas','usuario','==',params.userId))
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  function getLenghtElement(arr){
    try{
      const len = arr.length
      return(<p>{len}</p>)
    }catch(error){
      return(<p>0</p>)
    }
  }
  
  return (
    <>
    <Topbar/>
    
    <Container className="User-Container" fluid={true}>
      {/*Información del usuario*/}
      <Row>
        <Col><img className="User-Img" src={userData.img} alt="Imagen del usuario"/></Col>
        <Col>
          <span className="User-RowDataTitles">
            Nombre
          </span>
          <p>{userData.nombre}</p>
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Correo electrónico
          </span>
          <p>{userData.correo}</p>
        </Col>
      </Row>      
      <Row>
        <Col>
          <span className="User-RowDataTitles">
            Código postal
          </span>
          <p>{userData.codigo_postal}</p>
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Dirección
          </span>
          <p>{userData.direccion}</p>
        </Col>
        <Col>
          <span className="User-RowDataTitles">
            Número de teléfono
          </span>
          <p>{userData.telefono}</p>
        </Col>
      </Row>
      
      {/*Compras*/}
      <Row>
        <Col  md={12} className='User-ComprasContainer'>
          <span className="User-RowDataTitles">
            Compras efectuadas
          </span>          
        </Col>
      </Row>

      {/*Display Facturas*/}
      <Row>
        <Col>
          <span className="User-RowDataTitles">
            Fecha facturación
          </span>          
        </Col>
        <Col className="User-DisplayContentCenter">
          <span className="User-RowDataTitles">
            Cantidad productos
          </span>
          {/* <Button className="buttonMore" onClick={handleShow}><FcKindle/></Button> */}

        </Col>
        <Col className="User-DisplayContentCenter">
          <span className="User-RowDataTitles">
            Monto pagado
          </span>   
        </Col>
      </Row>
      {comprasUsuario != undefined?//Nos sercioramos de que se haya cargado bien el componente
        comprasUsuario.map((compra) => {
          return(
            <Row sm={3} md={3} lg={3} className="User-ComprasEfectuadasRow">
                <Col>
                  <p>{compra.fecha}</p>
                </Col>
                <Col className="User-DisplayContentCenter">
                  {getLenghtElement(compra.productos)}
                  
        {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Registro de Facturas de :{userData.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              {compra.productos.map(articulo => articulo.articulo.nombre)}
            </Col>
            <Col>
              {compra.productos.map(articulo => articulo.articulo.precio)}
            </Col>
            <Col>
              {compra.productos.map(articulo => articulo.articulo.fecha)}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>                  */}
                </Col>
                <Col className="User-DisplayContentCenter">
                  <p>{compra.total}</p>
                </Col>
            </Row>
          )
        })
      :<></>      
      }      
    </Container>
    </>
  );
}
