import React from 'react'

function Mensaje({icono, mensaje, tipo}) {
  return (
    <div className={`alert alert-${tipo}`} role="alert" style={{fontSize: '19px'}}>
      <i className={icono} style={{ margin: '10px'}}></i>
      {mensaje}
    </div>
  )
}

export {Mensaje}