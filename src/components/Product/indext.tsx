import { ShoppingCart } from "phosphor-react";

import { Actions, Background, Bottom, Cart } from "./styles";

interface Product {
  id?: number;
  image?: string;
  tag?: string;
  title?: string;
  description?: string;
  price?: string;
}

export function Product({id, image, tag, title, description, price}: Product) {
  return (
    <Background key={id}>
      <img src={image} alt="" />
      <p className="tag">{tag}</p>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <form action="">
        <Bottom>
            <p className="coin">R$ <span className="price">{price}</span></p>
            <Actions>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </Actions>
            <Cart>
              <ShoppingCart weight="fill"/>
            </Cart>
        </Bottom>
      </form>
    </Background>
  )
}