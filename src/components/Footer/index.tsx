import React from "react";

import "./styles.scss";

export const Footer: React.FC = () => {
  return (
    <div className="WrapperFooter">
      <aside className="LinksFooter">
        <div>
          <a href="/">Marca</a>
          <a href="/">Acompanhe seu pedido</a>
          <a href="/">Garantia Breto</a>
          <a href="/">Como Cuidar</a>
        </div>
        <div>
          <a href="/">Política de Troca</a>
          <a href="/">Pagamentos</a>
          <a href="/">Privacidade</a>
        </div>
        <span> © 2021 - CNPJ:000.000.00/0001-00- Breto Calçados ME</span>
      </aside>
      <main>
        <strong>NEWSLETTER</strong>
        <span>
          Receba ofertas e novidades preparadas especiamente para você.
        </span>
        <form>
          <input type="email" placeholder="Adcione seu email" name="email" />
          <button type="submit">OK</button>
        </form>
      </main>
    </div>
  );
};
