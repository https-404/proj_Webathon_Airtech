import logo from './logo.svg';
import './App.css';
import SignIn from './components/Auth/signin';
import SignUp from './components/Auth/signup';
import AuthDetails from './components/AuthDetails';
import Checkout from './components/Payment/Stripe';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Home" element={<AuthDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path='/pay' element={<Checkout/>}/>
          <Route path='success' element={<PaymentSuccess/>}/>
        </Routes>
      </Router>
  );
}

export default App;
