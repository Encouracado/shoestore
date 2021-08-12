import React from "react";

import "./styles.scss";

export function Card(props: any) {
  return (
    <div className="Card">
      {console.log(props.image)}
      <img src={props.image} alt="product" />
      <div className="ProductColors">
        <div className="Black" />

        <div className="Caramel" />

        <div className="Browm" />
      </div>
      <strong>{props.name}</strong>
      <p>R$ {props.value}</p>
    </div>
  );
}
