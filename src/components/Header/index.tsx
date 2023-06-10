import { HeaderContainer } from "./styles";

import logoIgnite from '../../assets/logo-desafio-ignite.svg'
import { NavLink } from "react-router-dom";

import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <div>
        <button>
          <MapPin size={22}/>
          Porto Alegre, RS
        </button>
        <NavLink to="/">
          <ShoppingCart size={22} weight="fill"/>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}