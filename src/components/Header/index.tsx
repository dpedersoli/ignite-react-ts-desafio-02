import { HeaderContainer, HeaderRightSide } from "./styles";

import logoIgnite from '../../assets/logo-desafio-ignite.svg'
import { NavLink } from "react-router-dom";

import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
  const itemsTEST = true
  const itemsNumTEST = 3

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoIgnite} alt="" />
      </NavLink>
      <HeaderRightSide>
        <div className="location">
          <MapPin size={22} weight="fill"/>
          <p> Porto Alegre, RS </p>
        </div>
        <NavLink to="/checkout">
          <button>
            {itemsTEST && <span>{itemsNumTEST}</span>}
            <ShoppingCart size={22} color="#C47F17" weight="fill"/>
          </button>
        </NavLink>
      </HeaderRightSide>
    </HeaderContainer>
  )
}