import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import "./styles.scss";

export const Form: React.FC = () => {
  return (
    <div className="Wrapper">
      <aside className="ExplicationForForm">
        <p>FALE CONOSCO</p>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          malesuada molestie est sagittis aliquet. Donec dapibus pretium mauris
          accumsan volutpat.
        </strong>
      </aside>
      <main className="FormMessage">
        <form className="FormStyle">
          <input type="text" name="nome" placeholder="Nome" />
          <input type="text" name="email" placeholder="Email" />
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Telefone"
          />

          <select name="departamento" placeholder="Departamento">
            <option value="Financeiro">Financeiro</option>
            <option value="Comercial">Comercial</option>
            <option value="TI">Tecnologia</option>
            <option value="Operacao">Operação</option>
          </select>

          <textarea name="mensagem" placeholder="Mensagem" />
          <button type="submit">
            <AiOutlineArrowRight />
          </button>
        </form>
      </main>
    </div>
  );
};
