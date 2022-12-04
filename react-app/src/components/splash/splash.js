import './splash.css'


function SplashPage () {

    return (
        <div id='splash-most-outer'>
            <div id='splash-outer'>
                <div id='ad-countainer'>
                    <div id='3-box'>
                        <div id='big-box'>
                            <img className='splash-ad' src='https://i.imgur.com/vX48Hqy.jpg'/>
                        </div>
                        <div className="med-box">
                            <img className='splash-ad' src='https://i.imgur.com/vX48Hqy.jpg'/>
                        </div>
                        <div className="med-box">
                            <img className='splash-ad' src='https://i.imgur.com/vX48Hqy.jpg'/>
                        </div>
                    </div>
                    <div id='1-box'></div>
                </div>
                <div id='menu-container'>
                    <div id='menu-title'></div>
                    <div id='menu-box'></div>
                </div>
            </div>
        </div>
    )
}


export default SplashPage
