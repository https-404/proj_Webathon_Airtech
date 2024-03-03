import logo from './logo.svg';
import './App.css';
import SignIn from './components/Auth/signin';
import SignUp from './components/Auth/signup';
import HomePage from './components/HomePage';
import CreatePackage from './components/createPkg';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {
  
  return (
   
      <Router>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/createpkg" element={<CreatePackage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
