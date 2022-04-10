const defState = {
  cash: 0,
}


export default function cashReducer(state = defState, action) {
  switch(action.type) {
    case "cash/add":
      return {...state, cash: state.cash + action.payload}
    case "cash/get":
      return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
}