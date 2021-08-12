import React from "react";
import { Header } from "./components/Header/index";
import { Carrousel } from "./components/Carrousel";
import { Products } from "./components/Products";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { CarrouselProductsMobile } from "./components/CarrouselProductsMobile";
import "./styles/GlobalStyles.scss";

function App() {
  return (
    <>
      <Header />
      <Carrousel />
      <Products />
      <CarrouselProductsMobile />
      <Form />
      <Footer />
    </>
  );
}

export default App;
