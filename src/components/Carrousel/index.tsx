import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./styles.scss";

import Banner from "../../assets/banner.jpg";

export const Carrousel: React.FC = () => {
  return (
    <div className="CarrouselContainer">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="CarrouselContainer">
          <img src={Banner} alt="breto" />
          <div className="legend" id="LegendForCarrousel">
            <strong>SAPATO</strong>
            <p>
              SAPATOS MASCULINOS PARA TODOS OS ESTILOS<br></br>ELEGANCIA E
              CONFORTO NOS SEUS PÉS
            </p>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={Banner} alt="breto" />
          <div className="legend" id="LegendForCarrousel">
            <strong>SAPATO</strong>
            <p>
              SAPATOS MASCULINOS PARA TODOS OS ESTILOS<br></br>ELEGANCIA E
              CONFORTO NOS SEUS PÉS
            </p>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={Banner} alt="breto" />
          <div className="legend" id="LegendForCarrousel">
            <strong>SAPATO</strong>
            <p>
              SAPATOS MASCULINOS PARA TODOS OS ESTILOS<br></br>ELEGANCIA E
              CONFORTO NOS SEUS PÉS
            </p>
            <button>COMPRAR</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
