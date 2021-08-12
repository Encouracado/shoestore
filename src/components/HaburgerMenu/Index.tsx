import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiShoppingBag } from "react-icons/bi";
import Logo from "../../assets/L2.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//import {GiHamburgerMenu} from 'react-icons/gi'

import "./styles.scss";

export const HaburgerMenu: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState: any) => !prevState);

  return (
    <div className="HabuerMenuContainer">
      <img src={Logo} alt="logo" />
      <Dropdown right isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          className="hamburgerMenu"
          style={{
            backgroundColor: "#e6e8eb",
            color: "#e6e8eb",
            border: "none",
          }}
        >
          <GiHamburgerMenu />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>BUSCA</DropdownItem>
          <DropdownItem>MINHA CONTA</DropdownItem>
          <DropdownItem>
            CARRINHO
            <BiShoppingBag />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
