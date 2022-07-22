import Navbar2 from "../components/Navbar2"
import { useState, useEffect } from "react";
import Login2 from "../components/Login2";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginRedirect, setLoginRedirect] = useState(false)

  return (
    <div>
      <Navbar2 
      loggedIn={loggedIn} 
      setLoggedIn={setLoggedIn} 
      setLoginRedirect={setLoginRedirect}
      />
      <h1>Welcome!</h1>
    </div>
  )
}

export default Home