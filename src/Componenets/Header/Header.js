import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
        />
        <SearchIcon
          className="header__searchIcon"
        />

      </div>
      <div className="header__navbar" >
        <Link to={!user && '/login'} >
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne"> Hello {!user ? "Guest" : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sing Out' : 'Sign in'}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo"> Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> Prices</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <LocalMallIcon className="header__optionBasket-icon" />
            <span className="header__optionBasket-number"> {basket?.length}</span>
          </div>
        </Link>
      </div>
    </div >


  )
}

export default Header