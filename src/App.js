import './App.css';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import Checkout from './Componenets/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Componenets/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Componenets/StateProvider/StateProvider';
import Payment from './Componenets/Payment/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51KdAsqHmidTRg1dLBS83Bjm2gxoqma2asEz2JlFU1VJcN3tJpcPyUR19jGIASUyzImjg0HxgjniWQC0V3zBeCO9U00VWidP2HE');
function App() {


  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //  will only run once when the app components loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser)
      if (authUser) {
        // The user just loggin / the user logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is loggeed out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    < div className="App" >

      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path='/' element={<><Header /><Home /></>}> </Route>
        </Routes>
        <Routes>
          <Route path='/payment' element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>}
          >
          </Route>

        </Routes>
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
        </Routes>
        <Routes>

        </Routes>

      </Router >
    </div >


  );
}

export default App;
