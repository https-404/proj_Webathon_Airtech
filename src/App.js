import logo from './logo.svg';
import './App.css';
import SignIn from './components/Auth/signin';
import SignUp from './components/Auth/signup';
import HomePage from './components/AuthDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import CreatePackage from './components/Packages/package';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
  );
}

export default App;
