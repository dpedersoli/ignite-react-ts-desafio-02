import { MainHeader, MainText, Qualities, TitleAndSubtitle } from "./styles";
import mainImage from '../../assets/images/Main/main.svg'
import { ShoppingCart } from "phosphor-react";

export function Home() {
  return (
    <MainHeader>
      <MainText>
        <TitleAndSubtitle>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </TitleAndSubtitle>
        <Qualities>
          <div className="firstQuality">
            <span><ShoppingCart size={22} color="#FAFAFA" weight="fill"/></span>
            <p>Compra simples e segura</p>
          </div>
          <div className="secondQuality">
            <span><ShoppingCart size={22} color="#FAFAFA" weight="fill"/></span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div className="thirdQuality">
            <span><ShoppingCart size={22} color="#FAFAFA" weight="fill"/></span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div className="fourthQuality">
            <span><ShoppingCart size={22} color="#FAFAFA" weight="fill"/></span>
            <p>O café chega fresquinho até você</p>
          </div>
        </Qualities>
      </MainText>
      <img src={mainImage} alt="imagem de um copo de café descartável com tampa, e com variedades de tipos de grãos e pó de café atrás do copo" />
    </MainHeader>
  )
}