import { createContext, ReactNode, useReducer } from 'react'
// Coffee Images
import Arabe from '../assets/Coffees/Arabe.svg'
import CafeLeite from '../assets/Coffees/CafeLeite.svg'
import Capuccino from '../assets/Coffees/Capuccino.svg'
import ChocolateQuente from '../assets/Coffees/ChocolateQuente.svg'
import Cubano from '../assets/Coffees/Cubano.svg'
import ExpressoAmericano from '../assets/Coffees/ExpressoAmericano.svg'
import ExpressoCremoso from '../assets/Coffees/ExpressoCremoso.svg'
import ExpressoGelado from '../assets/Coffees/ExpressoGelado.svg'
import ExpressoTradicional from '../assets/Coffees/ExpressoTradicional.svg'
import Havaiano from '../assets/Coffees/Havaiano.svg'
import Irlandes from '../assets/Coffees/Irlandes.svg'
import Latte from '../assets/Coffees/Latte.svg'
import Macchiato from '../assets/Coffees/Macchiato.svg'
import Mocaccino from '../assets/Coffees/Mocaccino.svg'
import {
  addCoffeeAction,
  deleteItemCartAction,
  subCoffeeAction,
  updateCartAction,
  IPayment,
  resetAction,
} from '../reducers/cart/action'

// Interface
import { ICoffee, reducerCoffee } from '../reducers/cart/cart'

interface IDeliveryData {
  children: ReactNode
}

interface ICoffeeContext {
  coffeeItems: ICoffee[]
  totalItems: number
  handleAddCoffee: (id: string, checkout?: boolean | undefined) => void
  handleSubCoffee: (id: string, checkout?: boolean | undefined) => void
  handleUpdateCart: (id: string) => void
  handleDeleteCoffee: (id: string) => void
  handleResetAction: () => void
}

// Context
export const CoffeeContext = createContext({} as ICoffeeContext)

// Starting Values
// Coffee Data
const coffeeMenu: ICoffee[] = [
  {
    id: 'c1',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.9,
    quantity: 0,
    preview: ExpressoTradicional,
    checkout: false,
  },
  {
    id: 'c2',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicionals',
    tags: ['Tradicional'],
    price: 9.9,
    quantity: 0,
    preview: ExpressoAmericano,
    checkout: false,
  },
  {
    id: 'c3',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: 9.9,
    quantity: 0,
    preview: ExpressoCremoso,
    checkout: false,
  },
  {
    id: 'c4',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    price: 9.9,
    quantity: 0,
    preview: ExpressoGelado,
    checkout: false,
  },
  {
    id: 'c5',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 0,
    preview: CafeLeite,
    checkout: false,
  },
  {
    id: 'c6',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 0,
    preview: Latte,
    checkout: false,
  },
  {
    id: 'c7',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 0,
    preview: Capuccino,
    checkout: false,
  },
  {
    id: 'c8',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 0,
    preview: Macchiato,
    checkout: false,
  },
  {
    id: 'c9',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 0,
    preview: Mocaccino,
    checkout: false,
  },
  {
    id: 'c10',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Especial', 'Com Leite'],
    price: 9.9,
    quantity: 0,
    preview: ChocolateQuente,
    checkout: false,
  },
  {
    id: 'c11',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    quantity: 0,
    preview: Cubano,
    checkout: false,
  },
  {
    id: 'c12',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
    price: 9.9,
    quantity: 0,
    preview: Havaiano,
    checkout: false,
  },
  {
    id: 'c13',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
    price: 9.9,
    quantity: 0,
    preview: Arabe,
    checkout: false,
  },
  {
    id: 'c14',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcoólico'],
    price: 9.9,
    quantity: 0,
    preview: Irlandes,
    checkout: false,
  },
]
// Initial Value
const startingValues = {
  coffeeItems: coffeeMenu,
  totalItems: 0,
  payment: undefined,
  address: {
    cep: '',
    streetName: '',
    streetNumber: '',
    extra: '',
    sector: '',
    city: '',
    state: '',
  },
}

export function DeliveryData({ children }: IDeliveryData) {
  // Reducer
  const [coffeeReducer, deployCoffee] = useReducer(
    reducerCoffee,
    startingValues,
  )

  // Deconstruction of Reducer Object
  const { coffeeItems, totalItems } = coffeeReducer

  // Deployment of Reducer Actions

  const handleAddCoffee = (id: string, checkout: boolean = false) => {
    const updatedItems = coffeeItems.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity + 1 }
      return item
    })
    deployCoffee(addCoffeeAction(updatedItems, checkout))
  }

  const handleSubCoffee = (id: string, checkout: boolean = false) => {
    const updatedItems = coffeeItems.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity - 1 }
      return item
    })
    deployCoffee(subCoffeeAction(updatedItems, checkout))
  }

  const handleUpdateCart = (id: string) => {
    const checkoutItem = coffeeItems.map((item) => {
      if (item.id === id) {
        return { ...item, checkout: true }
      }
      return item
    })
    deployCoffee(updateCartAction(checkoutItem))
  }

  const handleDeleteCoffee = (id: string) => {
    const checkoutItem = coffeeItems.map((item) => {
      if (item.id === id) return { ...item, checkout: false, quantity: 0 }
      return item
    })
    deployCoffee(deleteItemCartAction(checkoutItem))
  }

  const handleResetAction = () => {
    deployCoffee(resetAction(coffeeMenu))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeItems,
        totalItems,
        handleAddCoffee,
        handleSubCoffee,
        handleUpdateCart,
        handleDeleteCoffee,
        handleResetAction,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
