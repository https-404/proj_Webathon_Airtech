import logo from './logo.svg';
import './App.css';
import SignIn from './components/Auth/signin';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
