import React from "react";

import "./styles.scss";

export function Card(props: any) {
  return (
    <div className="Card">
      {console.log(props.image)}
      <img src={props.image} alt="product" />
      <div className="ProductColors">
        <div>
          <input type="checkbox" className="Black" />
        </div>
        <div>
          <input type="checkbox" className="Caramel" />
        </div>
        <div>
          <input type="checkbox" className="Browm" />
        </div>
      </div>
      <strong>{props.name}</strong>
      <p>R$ {props.value}</p>
    </div>
  );
}
