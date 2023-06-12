import { HeaderContainer, RightSide } from "./styles";

import logoIgnite from '../../assets/logo-desafio-ignite.svg'
import { NavLink } from "react-router-dom";

import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <RightSide>
        <div>
          <MapPin size={22} weight="fill"/>
          <p> Porto Alegre, RS </p>
        </div>
        <NavLink to="/">
          <ShoppingCart size={22} weight="fill"/>
        </NavLink>
      </RightSide>
    </HeaderContainer>
  )
}