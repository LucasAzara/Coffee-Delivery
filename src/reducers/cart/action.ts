import { ICoffee } from './cart'

// Action Types
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  SUB_ITEM = 'SUB_ITEM',
  UPDATE_CART = 'ADD_CART',
  DELETE_ITEM_CART = 'DELETE_ITEM_CART',
  RESET = 'RESET',
}

export type IPayment = 'Credit' | 'Debit' | 'Dinheiro' | undefined

export function addCoffeeAction(coffees: ICoffee[], checkout: boolean = false) {
  return {
    type: ActionTypes.ADD_ITEM,
    checkout,
    product: {
      coffees,
    },
  }
}

export function subCoffeeAction(coffees: ICoffee[], checkout: boolean = false) {
  return {
    type: ActionTypes.SUB_ITEM,
    checkout,
    product: {
      coffees,
    },
  }
}

export function updateCartAction(coffees: ICoffee[]) {
  return {
    type: ActionTypes.UPDATE_CART,
    product: {
      coffees,
    },
  }
}

export function deleteItemCartAction(coffees: ICoffee[]) {
  return {
    type: ActionTypes.DELETE_ITEM_CART,
    product: {
      coffees,
    },
  }
}

export function resetAction(coffees: ICoffee[]) {
  return {
    type: ActionTypes.RESET,
    product: {
      coffees,
    },
  }
}
