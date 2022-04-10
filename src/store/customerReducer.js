const defState = {
  customers: []
}

const ADD_CUSTOMER    = "customer/add",
      ADD_MORE_CUSTOMERS = "customer/more_add",
      REMOVE_CUSTOMER = "customer/remove";

export default function customerReducer(state = defState, action) {
  switch(action.type) {
    case ADD_MORE_CUSTOMERS:
      return {...state, customers: [...state.customers, ...action.payload]}
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    default:
      return state;
  }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addMoreCustomerAction = (payload) => ({type: ADD_MORE_CUSTOMERS, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});