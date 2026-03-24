//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProduct from './components/AddProducts';
import MakePayment from './components/MakePayment';
import GetProducts from './components/GetProducts';
import Carousel from './components/Carousel';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1> Welcome To e_duka for All Electrical Gadgets!</h1>
        
      </header>
      <Navbar/>
      
    </div>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/AddProduct' element={<AddProduct/>}/>
      <Route path='/' element={<GetProducts/>}/>
      <Route path='/makepayment' element={<MakePayment/>}/>

    </Routes>
    </Router>
  
    
    
  );
}

export default App;

