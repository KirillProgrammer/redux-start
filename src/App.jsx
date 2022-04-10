import './index.scss';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);

  const addCash = () => {
    dispatch({type: 'cash/add', payload: 5})
  }
  const getCash = () => {
    dispatch({type: 'cash/get', payload: 5})
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display:"flex"}}>
        <button onClick={() => addCash()}>Add</button>
        <button onClick={() => getCash()}>Remove</button>
      </div>
    </div>
  );
}

export default App
