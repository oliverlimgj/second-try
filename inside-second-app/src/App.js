import "./App.css";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import Register from "./Register";
import Dropdown from "./Dropdown";
import NavbarComp from "./NavbarComp";
import ReactRouterTry from "./ReactRouterTry";
import Login2 from "./components/Login2";
import Navbar2 from "./components/Navbar2";

import "bootstrap/dist/css/bootstrap.min.css";
import AccountBalance from "./pages/AccountBalance";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MakeATransfer from "./pages/MakeATransfer";
import TransactionHistory from "./pages/TransactionHistory";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <div className='App'>
      <Switch>
        <Router>
          <Route path='/' exact component={() => <Login2 />} />
          <Route path='/home' exact component={() => <Home />} />
          <Route path='/accountbalance' exact component={() => <AccountBalance />} />
          <Route path='/maketransfer' exact component={() => <MakeATransfer />} />
          <Route path='/transactionhistory' exact component={() => <TransactionHistory />} />
          <Route path='/signup' exact component={() => <SignUp />} />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
