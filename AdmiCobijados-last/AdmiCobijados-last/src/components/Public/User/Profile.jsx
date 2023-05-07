import React, { useState,useEffect } from 'react'
import {Header} from "./../shared/Header"
import { Footer } from "./../shared/Footer"
import { useAuth } from "./../../../negocio/context/AuthContext"
import { getUser } from "../../../data/GetUser"
import { insertUser } from '../../../data/InsertUser'
import { useAlerts } from "../../../negocio/context/AlertsControl";
import { Alert } from "../shared/Alert/Alert";
import { Mensaje } from "../shared/Alert/Mensaje";

const Profile = () => {
  const { openModal, onClickButton } = useAlerts();
  const [userP, setUser] = useState({
    codigo_postal: "",
    correo: "",
    id: "",
    img: "",
    nombre: "",
    status: true,
    telefono: "",
    direccion: ""
  })
  const { user } = useAuth();
  
  const extractUser = async() => {
    const usuario = await getUser(user.reloadUserInfo.localId)
    setUser(usuario)
  }

  useEffect(() => {
    extractUser()
  }, [])
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      insertUser(user.reloadUserInfo.localId, userP)
  };

  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit} className="container" style={{marginTop: "10px"}}>
      <div className="row">
        <div className="col-lg-4 offset-lg-0 text-center">
          <div
            className="border rounded-0 border-dark p-3 p-xl-4">
            <img
              className="rounded-circle border border-0 border-primary shadow"
              src={userP.img}
              alt="imagen usuario"
              style={{ width: "216", height: "auto" }}
            />
            <p className="lead" style={{ marginTop: "10px" }}>
              {userP.nombre}
            </p>
            <a
              className="btn btn-light border rounded-0 border-dark"
              href="/user-history"
            >
              Historial de Compra
            </a>
            {(userP.correo === "jonathan20.dev@gmail.com" || "johanzamora14@gmail.com")&& <a style={{marginTop:"15px"}} className="btn btn-light border rounded-0 border-dark" href="/admin">Admin</a>} 
          </div>
        </div>
        <div className="col">
            <div className="container border rounded-0 border-dark position-relative" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="row">
                <div className="col">
                  <div className="p-3 p-xl-4" style={{ fontSize: "14" }}>
                    <p
                      className="fs-2"
                      style={{
                        color: "rgb(0,0,0)",
                        fontSize: "20",
                        fontFamily: '"Source Sans Pro", sans-serif',
                      }}
                    >
                      Mi cuenta
                      <br />
                    </p>
                    <p style={{ color: "rgb(0,0,0)" }}>
                      Actualiza y edita la información que compartes con la
                      comunidad
                      <br />
                    </p>
                    <p style={{ color: "rgb(0,0,0)" }}>
                      Email de inicio de sesión:
                      <br />
                      {userP.correo}
                      <br />
                      <em>Tu email de inicio de sesión no se puede cambiar</em>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop: "-30px"}}>
                <div className="col">
                  <div className="p-3 p-xl-4" method="post">
                    <p style={{ color: "rgb(0,0,0)" }}>Nombre completo</p>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder={userP.nombre}
                      onChange={(e) => setUser({ ...userP, nombre: e.target.value })}
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop: "-20px"}}>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}>Teléfono</p>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder={userP.telefono}
                      onChange={(e) => setUser({ ...userP, telefono: e.target.value })}
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}>Código postal</p>
                    <input
                      className="form-control"
                      type="number"
                      min="4"
                      placeholder={userP.codigo_postal}
                      onChange={(e) => setUser({ ...userP, codigo_postal: e.target.value })}
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop: "-20px"}}>
                <div className="col">
                  <div className="p-3 p-xl-4" method="post">
                    <p style={{ color: "rgb(0,0,0)" }}>Dirección</p>
                    <textarea
                      className="form-control"
                      placeholder={userP.direccion}
                      style={{ borderRadius: "5px" }}
                      onChange={(e) => setUser({ ...userP, direccion: e.target.value })}
                    ></textarea>
                    <button
                      className="btn btn-dark border rounded-0 border-dark shadow-sm"
                      type="submit"
                      onClick={() => {
                        onClickButton()
                        }}
                      style={{ marginTop: "20px" }}>
                      Actualizar información
                      <br />
                    </button>
                    {openModal && (
                      <Alert>
                        <Mensaje icono={'bi bi-check-circle'} mensaje={'Perfil actualizado'} tipo={'success'}/>
                      </Alert>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </form>
    <Footer/>
    </>
  )
}

export {Profile}