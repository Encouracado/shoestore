import React from "react";
import { Header } from "./components/Header/index";
import { Carrousel } from "./components/Carrousel";
import { Products } from "./components/Products";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import "./styles/GlobalStyles.scss";

function App() {
  return (
    <>
      <Header />
      <Carrousel />
      <Products />
      <Form />
      <Footer />
    </>
  );
}

export default App;
