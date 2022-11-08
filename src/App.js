import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { filter_not,filter_done } from './JS/actions/actions';
import { useDispatch} from 'react-redux'



function App() {
  const dispatch= useDispatch();
  
  return (
    <div>
      <AddTask/>
      <button onClick={()=> dispatch(filter_not())}>Not Done</button>
      <button onClick={()=> dispatch(filter_done())}>Done</button>

      <ListTask/>
    </div>
  );
}

export default App;
