import Navbar2 from "../components/Navbar2"
import { useState, useEffect } from "react";

function TransactionHistory() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginRedirect, setLoginRedirect] = useState(false)

  return (
    <div>
      <Navbar2 
      loggedIn={loggedIn} 
      setLoggedIn={setLoggedIn} 
      setLoginRedirect={setLoginRedirect}
      />
      Transaction History
    </div>
  )
}

export default TransactionHistory