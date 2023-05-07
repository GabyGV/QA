import React from 'react'
import {Header} from "../shared/Header"
import {Footer} from "../shared/Footer"

const Contact = () => {
  const integrantes = [
    {nombre: "Kimberly Vargas", img: "https://media-exp1.licdn.com/dms/image/C5603AQFIcEFL-NSfqA/profile-displayphoto-shrink_400_400/0/1627255607401?e=1658361600&v=beta&t=vOE4drpZLUitwvz_h28OuLPwZftPH0QsL3BXLzBRXAk", puesto: "Frontend Developer",linkedin:"https://www.linkedin.com/in/kimberly-vargas-75a4471b9/"},
    {nombre: "Jonathan Mendoza", img: "https://media-exp1.licdn.com/dms/image/D5635AQEnAISyoNMu-A/profile-framedphoto-shrink_400_400/0/1621491422913?e=1653426000&v=beta&t=9lk75MuQW1MMAKAXuvwWFv_rS_PXCflhofKXVnVAr-c", puesto: "Frontend Developer", linkedin:"https://www.linkedin.com/in/jonathan20-dev/"},
    {nombre: "Johan Zamora", img: "https://scontent.fsjo8-1.fna.fbcdn.net/v/t1.6435-9/171247919_2319660061511918_8844957666508315159_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=qK5Fe9kp9aEAX9zc-18&_nc_ht=scontent.fsjo8-1.fna&oh=00_AT8ZcnDkYA3VegU-Oxh_hz4pjxUrf-A1RKZas_uG7dMR6A&oe=62AAD1C4", puesto: "Backend Developer",linkedin:"https://www.linkedin.com/in/johan-zamora-rojas-6b7457222/"},
    {nombre: "Jordán Guzman", img: "https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1618231291419?e=1660780800&v=beta&t=4ZIOm9ehuT_DOyq44KKJz51Jjh1z0-zZSntgSS5gVvc", puesto: "Frontend Developer",linkedin:"https://www.linkedin.com/feed/"},
    {nombre: "Oscar Ramos", img: "https://i.ibb.co/j69rHt4/20210101-173319-2.jpg", puesto: "Frontend Developer",linkedin:"https://www.linkedin.com/feed/"},
  ]
  return (
    <>
      <Header/>
      <div style={{marginTop: '45px', marginBottom: '70px'}}>
        <div className="row">
          <div className="row mb-4">
            <div className="text-center mx-auto">
              <h2 className="text-dark" style={{marginLeft: '15px',paddingTop: '20px',}}>Nuestro equipo</h2>
              <p className="text-muted">No importa el proyecto, nuestro equipo puede manejarlo.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row row-cols-2 row-cols-md-3 d-md-flex mx-auto justify-content-md-center" style={{maxWidth: '700px'}}>
            {integrantes.map(inte => {
              return <a className="col mb-0" href={inte.linkedin}>
              <div className="text-center"><img className="rounded mb-2 fit-cover" width={150} height={150} src={inte.img} alt="integrante"/>
                <h5 className="fw-bold mb-0"><strong>{inte.nombre}</strong></h5>
                <p className="text-muted mb-3">{inte.puesto}</p>
              </div>
              </a>})}
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
    
  )
}

export {Contact}