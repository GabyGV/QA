import { useNavigate } from "react-router-dom";

function ProductCard({ nombre, descripcion, precio, img, id }) {
  const navigate = useNavigate()
  return (
    <div className="ref-product" style={{cursor: 'pointer'}} onClick={()=> {
      navigate(`/product/${id}`)
    }}>
      <div className="ref-image" style={{width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <img src={img} alt="card-producto" loading="lazy" style={{width: 'auto', height: '250px'}} />
      </div>
      <div className="ref-product-data">
        <div className="ref-product-info">
          <h5 className="ref-name">{nombre}</h5>
          <p className="ref-excerpt">{descripcion}</p>
        </div>
        <p className="ref-price">{precio}</p>
      </div>
    </div>
  );
}

export { ProductCard };
