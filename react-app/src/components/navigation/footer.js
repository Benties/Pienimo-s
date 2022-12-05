import './footer.css'

const FooterBar = () =>{
    return(
      <div className="footer-bar">
        <div className='github-container'>
          <input
            className='github-logo'
            type='image'
            alt='logo'
            src='https://i.imgur.com/9upm1VI.png'
            onClick={()=> window.open('https://github.com/Benties/Pienimos')}
          ></input>
        </div>
        {/* <div className='domino-link-container'> */}
          {/* <input
            className='domino-link'
            type='image'
            alt='logo'
            src='https://i.imgur.com/fKBJGq2.jpg'
            onClick={()=> window.open('https://www.dominos.com/en/')}
          ></input> */}
        {/* </div> */}
      </div>
    )
    }

    export default FooterBar
