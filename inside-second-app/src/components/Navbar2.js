import { Link } from "react-router-dom";

function Navbar2({ loggedIn, setLoggedIn, setLoginRedirect }) {
  const onLogout = () => {
    setLoggedIn(false);
    setLoginRedirect(false);
  };

  let menu;

  /* if (loggedIn == false) {
     menu = ( <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page" href="#">
          Login
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/register"
          className="nav-link active"
          aria-current="page"
          href="#"
        >
          Sign
        </Link>
      </li>
    </ul>
    ); 
  } else { */
  menu = (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link
          to="/"
          className="nav-link active"
          aria-current="page"
          href="#"
          onClick={onLogout}
        >
          Logout
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <div>
            <Link to="/home" className="navbar-brand" href="#">
              Home
            </Link>

            <Link to="/maketransfer" className="navbar-brand">
              Make Transfer
            </Link>

            <Link to="/accountbalance" className="navbar-brand" href="#">
              Account Balance
            </Link>
          </div>
          <div>{menu}</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
