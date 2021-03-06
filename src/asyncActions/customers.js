import { addMoreCustomerAction } from "../store/customerReducer";

export const fetchCustomers = () => {
  return dispath => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispath(addMoreCustomerAction(json)));
  }
}