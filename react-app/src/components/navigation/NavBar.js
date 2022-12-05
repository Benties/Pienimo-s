import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LoginFormModal from '../auth';
import LogoutButton from '../auth/LogoutButton';
import CartFormModal from '../cart';
import './navBar.css'
const NavBar = () => {
  const currentUser = useSelector(state => state?.session?.user)
  const [clicked, setClick] = useState(false)
  const logoClick = useRef(null)
  const history = useHistory()

  const closeMenu = (e)=>{
    if(logoClick.current && clicked && !logoClick.current.contains(e.target)){
      setClick(false)
    }
  }

  useEffect(() => {
     document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [clicked]);

//   useEffect(() => {
//    return () => setClick(false)
//  },[clicked]);


  return (
    <nav>
      <div className='nav-div'>
        <div className='nav-start'>
          {/* <div> */}
            {/* <NavLink to='/' id='link-to-logo' exact={true} activeClassName='active'>
              <img id='nav-logo' src='https://i.imgur.com/bI8i0V3.png'/>
            </NavLink> */}
            <input
              type='image'
              onClick={()=> (history.push('/'), setClick(!clicked))}
              src='https://i.imgur.com/bI8i0V3.png'
              className={clicked? 'nav-logo click' : 'nav-logo'}
              ref={logoClick}/>
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
