import { ShoppingCart } from "phosphor-react";

import expresso from '../../assets/images/Products/expresso.svg'
import { Background } from "./styles";

export function Product() {
  return (
    <Background>
      <img src={expresso} alt="" />
      <p className="tag">Tradicional</p>
      <p className="title">Expresso Tradicional</p>
      <p className="description">O tradicional café feito com água quente e grãos moídos</p>
      <div className="actions">
        <p className="coin">R$ <span className="price">9,90</span></p>
        <div className="input-section">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button type="submit">
          <ShoppingCart/>
        </button>
      </div>
    </Background>
  )
}