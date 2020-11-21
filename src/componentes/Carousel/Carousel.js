import React from "react";
import "./Carousel.css";
import imagen1 from "../../assets/imagenes/imagenes-carrousel/imagen-1.jpg";
import imagen2 from "../../assets/imagenes/imagenes-carrousel/imagen-2.jpg";
import imagen3 from "../../assets/imagenes/imagenes-carrousel/imagen-3.jpg";
import imagen4 from "../../assets/imagenes/imagenes-carrousel/imagen-4.jpg";
import imagen5 from "../../assets/imagenes/imagenes-carrousel/imagen-5.jpg";
import imagen6 from "../../assets/imagenes/imagenes-carrousel/imagen-6.jpg";

const Carousel = (props) => {
  return (
    <div className={`carousel slide`} data-ride="carousel" id="mi-carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#mi-carousel"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#mi-carousel" data-slide-to="1"></li>
        <li data-target="#mi-carousel" data-slide-to="2"></li>
        <li data-target="#mi-carousel" data-slide-to="3"></li>
        <li data-target="#mi-carousel" data-slide-to="4"></li>
        <li data-target="#mi-carousel" data-slide-to="5"></li>
      </ol>
      <div className="carousel-inner">
        <div className="item active">
          <img src={imagen1} alt="imagen-1" />
        </div>
        <div className="item">
          <img src={imagen2} alt="imagen-2" />
        </div>
        <div className="item">
          <img src={imagen3} alt="imagen-3" />
        </div>
        <div className="item">
          <img src={imagen4} alt="imagen-4" />
        </div>
        <div className="item">
          <img src={imagen5} alt="imagen-5" />
        </div>
        <div className="item">
          <img src={imagen6} alt="imagen-6" />
        </div>
      </div>
      <a
        className="left carousel-control"
        href="#mi-carousel"
        data-slide="prev"
      >
        <span className="glyphicon glyphicon-chevron-left"> </span>
        <span className="sr-only"> Anterior </span>
      </a>
      <a
        className="right carousel-control"
        href="#mi-carousel"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right"> </span>
        <span className="sr-only"> Siguiente </span>
      </a>
    </div>
  );
};
export default Carousel;
