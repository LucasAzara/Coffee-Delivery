// CSS
import {
  HomeContainer,
  Intro,
  IntroHeading,
  IntroIcons,
  Shopping,
  Time,
  Box,
  CoffeCup,
  CoffeeTitle,
  CoffeeList,
  CoffeInfo,
  CoffeeQuantity,
  CoffeeShop,
  CoffeeCheckoutButton,
} from './styles'
// Icons
import {
  ShoppingCart,
  Coffee,
  Package,
  Timer,
  Plus,
  Minus,
} from 'phosphor-react'
// Img
import CoffeeCup from '../../assets/CoffeeCup.svg'
// Coffee Images
import Arabe from '../../assets/Coffees/Arabe.svg'
import CafeLeite from '../../assets/Coffees/CafeLeite.svg'
import Capuccino from '../../assets/Coffees/Capuccino.svg'
import ChocolateQuente from '../../assets/Coffees/ChocolateQuente.svg'
import Cubano from '../../assets/Coffees/Cubano.svg'
import ExpressoAmericano from '../../assets/Coffees/ExpressoAmericano.svg'
import ExpressoCremoso from '../../assets/Coffees/ExpressoCremoso.svg'
import ExpressoGelado from '../../assets/Coffees/ExpressoGelado.svg'
import ExpressoTradicional from '../../assets/Coffees/ExpressoTradicional.svg'
import Havaiano from '../../assets/Coffees/Havaiano.svg'
import Irlandes from '../../assets/Coffees/Irlandes.svg'
import Latte from '../../assets/Coffees/Latte.svg'
import Macchiato from '../../assets/Coffees/Macchiato.svg'
import Mocaccino from '../../assets/Coffees/Mocaccino.svg'

interface ICoffee {
  id: string
  title: string
  preview: string
  description: string
  tags: string[]
  price: number
  quantity: number
}

export function Home() {
  const Coffees: ICoffee[] = [
    {
      id: '1',
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['Tradicional'],
      price: 9.9,
      quantity: 0,
      preview: ExpressoTradicional,
    },
    {
      id: '2',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicionals',
      tags: ['Tradicional'],
      price: 9.9,
      quantity: 0,
      preview: ExpressoAmericano,
    },
    {
      id: '3',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tags: ['Tradicional'],
      price: 9.9,
      quantity: 0,
      preview: ExpressoCremoso,
    },
    {
      id: '4',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: ['Tradicional', 'Gelado'],
      price: 9.9,
      quantity: 0,
      preview: ExpressoGelado,
    },
    {
      id: '5',
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 0,
      preview: CafeLeite,
    },
    {
      id: '6',
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 0,
      preview: Latte,
    },
    {
      id: '7',
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 0,
      preview: Capuccino,
    },
    {
      id: '8',
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 0,
      preview: Macchiato,
    },
    {
      id: '9',
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tags: ['Tradicional', 'Com Leite'],
      price: 9.9,
      quantity: 0,
      preview: Mocaccino,
    },
    {
      id: '10',
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: ['Especial', 'Com Leite'],
      price: 9.9,
      quantity: 0,
      preview: ChocolateQuente,
    },
    {
      id: '11',
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      price: 9.9,
      quantity: 0,
      preview: Cubano,
    },
    {
      id: '12',
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: ['Especial'],
      price: 9.9,
      quantity: 0,
      preview: Havaiano,
    },
    {
      id: '13',
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: ['Especial'],
      price: 9.9,
      quantity: 0,
      preview: Arabe,
    },
    {
      id: '14',
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: ['Especial', 'Alcoólico'],
      price: 9.9,
      quantity: 0,
      preview: Irlandes,
    },
  ]

  return (
    <HomeContainer>
      <Intro>
        <div>
          <IntroHeading>
            <h1>Encontre o Café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </IntroHeading>
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
        <img src={CoffeeCup} alt="Coffee Cup with Coffee Beans around it" />
      </Intro>
      <div>
        <CoffeeTitle>Nossos cafés</CoffeeTitle>
        <CoffeeList>
          {Coffees.map((coffee) => {
            return (
              <li key={coffee.id}>
                {/* Preview */}
                <img src={coffee.preview} alt={`${coffee.title}in a cup`} />
                {/* Tags */}
                <CoffeInfo>
                  <div>
                    {coffee.tags.map((tag, index) => {
                      return (
                        <span key={`${tag}${index}`}>{tag.toUpperCase()}</span>
                      )
                    })}
                  </div>
                  <div>
                    <h3>{coffee.title}</h3>
                    <p>{coffee.description}</p>
                  </div>
                </CoffeInfo>
                <CoffeeShop>
                  <p>
                    R$
                    <span>
                      {coffee.price.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </p>
                  <div>
                    <CoffeeQuantity>
                      <button>
                        <Minus />
                      </button>
                      {coffee.quantity}
                      <button>
                        <Plus />
                      </button>
                    </CoffeeQuantity>
                    <CoffeeCheckoutButton>
                      <ShoppingCart weight="fill" />
                    </CoffeeCheckoutButton>
                  </div>
                </CoffeeShop>
              </li>
            )
          })}
        </CoffeeList>
      </div>
    </HomeContainer>
  )
}
