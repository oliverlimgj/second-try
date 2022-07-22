import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Switch, Router, Route, Link } from "react-router-dom";

import AccountBalance from "./pages/AccountBalance";
import Home from "./pages/Home";
import MakeATransfer from "./pages/MakeATransfer";
import TransactionHistory from "./pages/TransactionHistory";

function NavbarComp() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DBS Bank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/makeatransfer"}>
              Make a Transfer
            </Nav.Link>
            <Nav.Link as={Link} to={"/transactionhistory"}>
              Transcction History
            </Nav.Link>
            <Nav.Link as={Link} to={"/accountbalance"}>
              Account Balance
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/makeatransfer">
          <MakeATransfer />
        </Route>
        <Route path="/transactionhistory">
          <TransactionHistory />
        </Route>
        <Route path="/accountbalance">
          <AccountBalance />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavbarComp;
