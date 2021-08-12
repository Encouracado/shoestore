import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import sapatoFeminino from "../../assets/1.jpg";
import carteira from "../../assets/2.jpg";
import sapatoFeminino2 from "../../assets/3.jpg";
import sapatoMasculino from "../../assets/4.jpg";
import Cinto from "../../assets/1.jpg";
import carteira2 from "../../assets/1.jpg";

import "./styles.scss";

export const CarrouselProductsMobile: React.FC = () => {
  return (
    <div className="CarrouselContainerMobile">
      <strong className="titleGridMobile">Collection</strong>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="CarrouselContainer">
          <img src={sapatoFeminino} alt="breto" />
          <div id="LegendForCarrouselMobile">
            <div className="ProductColorsMobile">
              <div className="Black" />

              <div className="Caramel" />

              <div className="Browm" />
            </div>
            <strong>SAPATO</strong>
            <p>R$ 150</p>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={carteira} alt="breto" />
          <div id="LegendForCarrouselMobile">
            <div className="ProductColorsMobile">
              <div className="Black" />

              <div className="Caramel" />

              <div className="Browm" />
            </div>
            <strong>CARTEIRA</strong>
            <p>R$ 150</p>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={sapatoFeminino2} alt="breto" />
          <div id="LegendForCarrouselMobile">
            <div className="ProductColorsMobile">
              <div className="Black" />

              <div className="Caramel" />

              <div className="Browm" />
            </div>
            <strong>SAPATO</strong>
            <p>R$ 150</p>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={sapatoMasculino} alt="breto" />
          <div id="LegendForCarrouselMobile">
            <div className="ProductColorsMobile">
              <div className="Black" />

              <div className="Caramel" />

              <div className="Browm" />
            </div>
            <strong>SAPATO</strong>
            <p>R$ 150</p>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={Cinto} alt="breto" />
          <div id="LegendForCarrouselMobile">
            <div className="ProductColorsMobile">
              <div className="Black" />

              <div className="Caramel" />

              <div className="Browm" />
            </div>
            <strong>CINTRO</strong>
            <p>R$ 150</p>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={sapatoFeminino2} alt="breto" />
          <div id="LegendForCarrouselMobile">
            <div className="ProductColorsMobile">
              <div className="Black" />

              <div className="Caramel" />

              <div className="Browm" />
            </div>
            <strong>SAPATO</strong>
            <p>R$ 150</p>
          </div>
        </div>
        <div className="ImageCarrousel">
          <img src={carteira2} alt="breto" />
          <div id="LegendForCarrouselMobile">
            <div className="ProductColorsMobile">
              <div className="Black" />

              <div className="Caramel" />

              <div className="Browm" />
            </div>
            <strong>CARTEIRA</strong>
            <p>R$ 150</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
