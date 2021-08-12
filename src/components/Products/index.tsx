import React from "react";
import { Card } from "../Card/index";

import sapatoFeminino from "../../assets/1.jpg";
import carteira from "../../assets/2.jpg";
import sapatoFeminino2 from "../../assets/3.jpg";
import sapatoMasculino from "../../assets/4.jpg";
import Cinto from "../../assets/1.jpg";
import carteira2 from "../../assets/1.jpg";

import "./styles.scss";

export const Products: React.FC = () => {
  return (
    <>
      <strong className="titleGrid">Collection</strong>
      <div className="ProductsGrid">
        <Card image={sapatoFeminino} name={"sapato masculino"} value={150} />
        <Card image={carteira} name={"sapato masculino"} value={150} />
        <Card image={sapatoFeminino2} name={"sapato masculino"} value={150} />
        <Card image={sapatoMasculino} name={"sapato masculino"} value={150} />
        <Card image={Cinto} name={"sapato masculino"} value={150} />
        <Card image={carteira2} name={"sapato masculino"} value={150} />
      </div>
    </>
  );
};
