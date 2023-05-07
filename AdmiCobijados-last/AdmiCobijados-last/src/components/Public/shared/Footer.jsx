import React from 'react'

function Footer() {
  return (
    <div>
    <hr style={{marginTop:'50px', backgroundColor:'#000'}}/>
    <footer className="page-footer font-small blue pt-4">
    <div className="text-center py-3" style={{letterSpacing:'0.1em', fontSize:'28px', marginBottom:'20px'}}>Cobijado</div>
        <div className="container-fluid text-center text-md-left">
        <div className="row" style={{justifyContent: 'space-between'}}>
            
            <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <ul className="list-unstyled">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/products/todos">Tienda</a></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li><a href="/about">Acerca de</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <ul className="list-unstyled">
                        <li className="d-flex justify-content-center">
                            <i><a style= {{margin:'10px'}}href="#!"><i style={{margin:"10px"}} className="bi bi-facebook"></i></a></i>
                            <i><a style= {{margin:'10px'}} href="#!"><i style={{margin:"10px"}} className="bi bi-twitter"></i></a></i>
                            <i><a style= {{margin:'10px'}} href="#!"><i style={{margin:"10px"}} className="bi bi-instagram"></i></a></i>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <ul className="list-unstyled">
                        <li><a href="#!">Políticas de la tienda</a></li>
                        <li><a href="#!">Preguntas frecuentes</a></li>
                    </ul>
                </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="#!"> cobijado.com</a>
    </div>

</footer>

    </div>
  )
}

export { Footer}