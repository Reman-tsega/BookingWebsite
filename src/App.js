import './App.css';
import {BrowserRouter,Route, Routes } from "react-router-dom"
// import home from './Pages/Home/home';
import List from './Pages/List/List';
import Nav from './Component/Nav/Nav';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/hotel' element={<Hotel />}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
