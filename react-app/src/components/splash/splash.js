import React from 'react'
import { useHistory } from 'react-router-dom'
import './splash.css'


function SplashPage () {
    const history = useHistory()
    const headToMenu=()=>{
        history.push('/menu/pies')
    }
    return (
        <div id='splash-most-outer'>
            <div id='splash-outer'>
                <div id='ad-countainer'>
                    <div id='trip-box'>
                        <div id='big-box'>
                            <img className='splash-ad' src='https://i.imgur.com/aPqMMgt.jpg'/>
                        </div>
                        <div id='med-box-container'>
                        <div className="med-box">
                            <img className='splash-ad' src='https://i.imgur.com/aPqMMgt.jpg'/>
                        </div>
                        <div className="med-box">
                            <img className='splash-ad' src='https://i.imgur.com/aPqMMgt.jpg'/>
                        </div>

                        </div>
                    </div>
                    <div id='one-box'>
                        <img className='bottom-splash-ad' src='https://i.imgur.com/DggKdax.jpg'/>
                    </div>
                </div>
                <div id='splash-menu-container'>
                    <div id='menu-title'> Browse Our Menu</div>
                    <div id='menu-box'>
                        <img className='splash-ad' src='https://i.imgur.com/Nbz4paQ.jpg'/>
                        <button onClick={()=> headToMenu()}className='splash-order-butt'>VIEW FULL MENU</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SplashPage
