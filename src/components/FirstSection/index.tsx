import { Main, MainText, Qualities, TitleAndSubtitle } from "./styles";
import mainImage from '../../assets/images/Main/main.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function FirstSection() {
  return (
    <Main>
      <MainText>
        <TitleAndSubtitle>
          <h3>Encontre o café perfeito para qualquer hora do dia</h3>
          <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
        </TitleAndSubtitle>
        <Qualities>
          <div className="firstQuality">
            <span><ShoppingCart size={16} color="#FAFAFA" weight="fill"/></span>
            <p>Compra simples e segura</p>
          </div>
          <div  className="secondQuality">
            <span><Package size={16} color="#FAFAFA" weight="fill"/></span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div className="thirdQuality">
            <span><Timer size={16} color="#FAFAFA" weight="fill"/></span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div className="fourthQuality">
            <span><Coffee size={16} color="#FAFAFA" weight="fill"/></span>
            <p>O café chega fresquinho até você</p>
          </div>
        </Qualities>
      </MainText>
      <img src={mainImage} alt="imagem de um copo de café descartável com tampa, e com variedades de tipos de grãos e pó de café atrás do copo" />
    </Main>
  )
}