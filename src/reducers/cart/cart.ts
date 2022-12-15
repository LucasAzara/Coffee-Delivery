import { ActionTypes, IPayment } from './action'

export interface ICoffee {
  id: string
  title: string
  preview: string
  description: string
  tags: string[]
  price: number
  quantity: number
  checkout: boolean
}

export interface ICoffeeState {
  coffeeItems: ICoffee[]
  totalItems: number
}

export interface IDeploy {
  type: string
  checkout?: boolean
  product?: {
    coffees: ICoffee[]
  }
}

export function reducerCoffee(state: ICoffeeState, action: IDeploy) {
  // Total Item Count
  const itemCount = action.product
    ? action.product.coffees.reduce((counter, item) => {
        if (item.checkout) return counter + item.quantity
        return counter
      }, 0)
    : 0

  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        coffeeItems: action.product!.coffees,
        totalItems: action.checkout ? itemCount : state.totalItems,
      }
    case ActionTypes.SUB_ITEM:
      return {
        coffeeItems: action.product!.coffees,
        totalItems: action.checkout ? itemCount : state.totalItems,
      }

    case ActionTypes.UPDATE_CART:
      return {
        coffeeItems: action.product!.coffees,
        totalItems: itemCount,
      }

    case ActionTypes.DELETE_ITEM_CART:
      return {
        coffeeItems: action.product!.coffees,
        totalItems: itemCount,
      }

    case ActionTypes.RESET:
      return {
        coffeeItems: action.product!.coffees,
        totalItems: 0,
      }

    default:
      return state
  }
}
