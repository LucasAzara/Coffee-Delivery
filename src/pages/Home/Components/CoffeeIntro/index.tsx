import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Box,
  CoffeCup,
  Intro,
  IntroHeading,
  IntroIcons,
  Shopping,
  Time,
} from './styles'
// Img
import CoffeeCup from '../../../../assets/CoffeeCup.svg'

export function CoffeeIntro() {
  return (
    <Intro>
      <div>
        {/* Introduction Title */}
        <IntroHeading>
          <h1>Encontre o Café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </IntroHeading>
        {/* Introdution Quick Info */}
        <IntroIcons>
          <p>
            <Shopping>
              <ShoppingCart weight="fill" />
            </Shopping>
            Compra simples e segura
          </p>
          <p>
            <Box>
              <Package weight="fill" />
            </Box>
            Embalagem mantém o café intacto
          </p>
          <p>
            <Time>
              <Timer weight="fill" />
            </Time>
            Entrega rápido e rastreada
          </p>
          <p>
            <CoffeCup>
              <Coffee weight="fill" />
            </CoffeCup>
            O Café chega fresquinho até você
          </p>
        </IntroIcons>
      </div>
      {/* Introduction Image */}
      <img src={CoffeeCup} alt="Coffee Cup with Coffee Beans around it" />
    </Intro>
  )
}
