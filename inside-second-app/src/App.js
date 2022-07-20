import './App.css';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import Register from './Register';
import Dropdown from './Dropdown';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dropdown />
      <Register />
      <LoginPage />
    </div>
  );
}

export default App;
