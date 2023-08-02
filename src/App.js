import React, { useEffect } from "react";
import "./App.css"
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe("pk_test_51NZ7CoSHFldvQPH5umOrDpC8MFgpmleWTV0Wge6tnGADPuM9YvRSbya9mR2cSBEs5Uciws5nS6AAgjoudfCfS8E500GVHCzbGj");

function App() {
  const [{}, dispatch] =useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
    }else{
        dispatch({
        type: 'SET_USER',
        user: null
    })
    }
  })
},[])
  return (
    <Router>
    <div className="app">  

      <Routes>
      <Route path="/orders" element={<> < Header /> <Orders /> </>} />  
        <Route path="/login" element={<> <Login /> </>} />    
        <Route   path="/Checkout" element={<>< Header /> <Checkout /> </> }/>  
        <Route   path="/payment" element={<>  <Header /> <Elements stripe={promise}> <Payment /> </Elements> </> } /> 
        <Route   path="/" element={<>  <Header /> <Home/> </> } />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
