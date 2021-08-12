import React from "react";

import { BiShoppingBag } from "react-icons/bi";

import "./styles.scss";
import LogoBreto from "../../assets/L1.png";

export const Header: React.FC = () => {
  return (
    <header className="HeaderBox">
      <div>
        <a href="/masculino">MASCULINO</a>
        <a href="/feminino">FEMININO</a>
        <a href="/acessorios">ACESSÓRIOS</a>
      </div>
      <img src={LogoBreto} alt="breto" />
      <div>
        <a href="/busca">BUSCA</a>
        <a href="/minhaconta">MINHA CONTA</a>
        <a href="/carrinho" className="Icon">
          CARRINHO
          <BiShoppingBag />
        </a>
      </div>
    </header>
  );
};
