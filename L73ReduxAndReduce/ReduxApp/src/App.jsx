import Todo from "./components/todo";
import './App.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import

function App() {

  return (
    <>
      <Provider store={store} >
        <Todo />
      </Provider>
        <h1>My Todo App</h1>
    </>
  )
}

export default App;
