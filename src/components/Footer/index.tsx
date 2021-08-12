import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import "./styles.scss";

export const Footer: React.FC = () => {
  return (
    <div className="WrapperFooter">
      <aside className="LinksFooter">
        <div className="StoreLinks">
          <a href="/">Marca</a>
          <a href="/">Acompanhe seu pedido</a>
          <a href="/">Garantia Breto</a>
          <a href="/">Como Cuidar</a>
        </div>
        <div className="StoreLinks">
          <a href="/">Política de Troca</a>
          <a href="/">Pagamentos</a>
          <a href="/">Privacidade</a>
        </div>
        <span> © 2021 - CNPJ:000.000.00/0001-00- Breto Calçados ME</span>
      </aside>
      <main className="ContainerNews">
        <strong>NEWSLETTER</strong>
        <span>
          Receba ofertas e novidades preparadas especiamente para você.
        </span>
        <form>
          <input type="email" placeholder="Adcione seu email" name="email" />
          <button type="submit">OK</button>
        </form>
        <div className="SocialMidiaContainer">
          <span>REDES SOCIAIS</span>
          <div className="SocialMidiaIcons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </main>
    </div>
  );
};
