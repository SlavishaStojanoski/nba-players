// Main navigation component
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';
import logo from '../img/nbalogo.png';

const Navbar = () => {
  const { username } = useSelector((store) => store.loginReducer);

  return (
    <div className='navbar'>
      <nav className='navbar-menu'>
        <ul>
          <li className='content-left'>
            <Link to='/'>
              <img
                alt='NBA Logo'
                src={logo}
                style={{
                  width: '59px',
                  height: '59px',
                  marginLeft: '25px',
                  cursor: 'pointer',
                }}
              />
            </Link>
          </li>
          <li className='content-left'>
            <Link to='/myteam'>My Team</Link>
          </li>
          <li className='content-left'>
            <Link to='/player'>Player</Link>
          </li>
          <li className='content-right'>
            <Link to='/'>{username}</Link>
          </li>
          <li className='content-right'>
            <Link to='/logout'>LogOut</Link>
          </li>
          {/* <li className='content-right'>
            <Link to='/login'>Login</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
