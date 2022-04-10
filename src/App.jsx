import './index.scss';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customer.customers)

  const addCash = (cash) => {
    dispatch({type: 'cash/add', payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: 'cash/get', payload: cash})
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display:"flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Remove cash</button>
        <button onClick={() => addCustomer(prompt())}>Add client</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add more client</button>
      </div>
      { customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
            )}
        </div>
        : 
        <div>
          Клиентов нет
        </div>
      }
    </div>
  );
}

export default App
