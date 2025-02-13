
import reactLogo from './assets/react.svg'

import './App.css'
import { useAppDispatch, useAppSelector } from './Redux/hooks'
import { increment, decrement } from './Redux/slices/counterSlice'
import Home from './crudApp/homePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateUser from './crudApp/createUserPage';
import UpdateUser from './crudApp/updateUser';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ToDoApp from './ToDoApp/to-do-app';
import Destructuring from './reactTopics/destructuring';


function App() {
  // const count = useAppSelector((state) => state.counter);
  // const dispatch = useAppDispatch();
  return (
   
    
    <>
    <Provider store={store}>
      {/* <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h1>count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      
    </div> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/createUserPage' element={<CreateUser />}> </Route>
          <Route path='/editpage/:id' element={<UpdateUser />}> </Route>


        </Routes>
      </BrowserRouter>


    </Provider>
    
    <ToDoApp />
    <Destructuring/>
    </>
    
  )
}

export default App
