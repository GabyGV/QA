import React from "react";
import { Carousel } from 'react-bootstrap'

const imagen = 'https://tecdigital.tec.ac.cr/dotlrn/file-storage/view/dotlrn_fs_1066758_root_folder%2Fimagenesreact%2F1.jpg'
const imagen2 = 'https://tecdigital.tec.ac.cr/dotlrn/file-storage/view/dotlrn_fs_1066758_root_folder%2Fimagenesreact%2F2.jpg'
const imagen3 = 'https://tecdigital.tec.ac.cr/dotlrn/file-storage/view/dotlrn_fs_1066758_root_folder%2Fimagenesreact%2F3.jpg'

function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={imagen} 
          alt="Banner 1"
        />

      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export { CarouselBanner };
