
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from './auth';
import LogoutButton from './auth/LogoutButton';
import CartFormModal from './cart';
import './navBar.css'
const NavBar = () => {
  const currentUser = useSelector(state => state?.session?.user)

  return (
    <nav>
      <div className='nav-div'>
        <div className='nav-start'>
          {/* <div> */}
            <NavLink to='/' exact={true} activeClassName='active'>
              HOME
            </NavLink>
          {/* </div> */}
          {/* <div> */}
            <NavLink to='/menu/pies' exact={true} activeClassName='active'>
              MENU
            </NavLink>
          {/* </div> */}
        </div>
          <div className='nav-end'>
            <div className='nav-log'>
              {currentUser? <LogoutButton user={currentUser}/> :
                <LoginFormModal/>
              }
            </div>
            <div className='nav-cart'>
              <CartFormModal/>
            </div>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
