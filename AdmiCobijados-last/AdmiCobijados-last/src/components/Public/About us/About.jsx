import React from 'react'
import {Header} from "../shared/Header"
import {Footer} from "../shared/Footer"
import "./About.css"

const About = () => {
  return (
    <>
    <Header/>
        <div className="container" style={{display: 'flex', flexDirection: 'column', marginTop: '45px'}}>
            <div className="block-heading justify-content-center text-center" style={{flexDirection: 'column', marginBottom: '40px', paddingTop: '20px', marginLeft: '15px', marginRight: '15px'}}>
                <h2 className="text-dark">Nuestra Historia</h2>
                <p style={{textAlign: 'center', maxWidth: '420px', margin: 'auto', opacity: '.7'}}><br/>
                El proyecto E-commerce Cobijado nace el 5 de marzo del 2022 como propuesta a una electiva del TEC,
                la aplicación es su escaparate digital en Internet donde las personas pueden ingresar en la página,
                ver los productos, agregarlos a un carrito y luego finalizar la compra. Además, para este proyecto 
                se tomaron en cuenta dos aspectos importantes, los cuales son:
                <br/>
                <br/>
                </p>
            </div>
            <div className="row justify-content-center textos">
                <div className="col-md-5 feature-box texto" >
                  <i className="bi bi-layers-half icono"></i>
                    <div>
                      <h4 className="subtitulo" >Firebase</h4>
                      <p className="descripcion" >Como base de datos no relacional, en esta se encuentran las colecciones necesarias para hacer posible la interacción del cliente con la aplicación.<br/><br/></p>
                    </div>
                </div>
                <div className="col-md-5 feature-box texto">
                  <i className="bi bi-phone icono"></i>
                  <div>
                    <h4 className="subtitulo">Responsive</h4>
                    <p className="descripcion">Para un E-commerce es fundamental esto, así se le facilita al usuario adquirir el producto desde cualquier lugar.<br/><br/></p>
                  </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export  {About}