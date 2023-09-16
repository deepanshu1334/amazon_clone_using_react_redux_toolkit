import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage,Navbar,ProductPage,CheckOut,SearchResul } from './components';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route exact path='/search' element={<SearchResul/>}/>
    <Route exact path='/product/:id' element={<ProductPage/>}/>
    <Route exact path='/checkout' element={<CheckOut/>}/>
    </Routes>


    
    </BrowserRouter>
  );
}

export default App;
