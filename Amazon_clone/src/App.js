import React,{ useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './Checkout/Checkout'
import Login from './components/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from "axios";


function App() {
  const [productList, setProductList] = useState([]);
  // const [categoryList, setCategoryList] = useState([]);
   const fetchProducts = async()=>{
    const url = 'http://localhost:4000/';
    const response = await axios.get('http://localhost:4000/product');
  setProductList(response.data);
  console.log(response);
}

useEffect(()=> {
  fetchProducts(); 
}, [])

  return (
    <>
    <BrowserRouter>
    <div className="App">
   
    <Header productList={productList}/>
   
  
    <Routes>
           <Route path='/checkout' element={<Checkout />}/>
           <Route path='/login' element={<Login />} />
           <Route path='/' element={<Home productList={productList}/>} />
         
        
    </Routes>
    </div>
 
    </BrowserRouter>
   
    </>
  );
}

export default App;
