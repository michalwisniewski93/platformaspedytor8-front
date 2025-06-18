import React, {useEffect} from 'react'
import { FaTruck } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Header = () => {

 useEffect(() => {
    const menuIcon = document.querySelector('.menuicon');
    const menu = document.querySelector('.menu');

    const handleClick = () => {
      menu.classList.toggle('active');
    };

    if (menuIcon) {
      menuIcon.addEventListener('click', handleClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener('click', handleClick);
      }
    };
  }, []);


  const styles = {
  hero: {
    maxWidth: '1940px',
    margin: '0 auto',
    
  }
};


    return (
        <>
        <div className="logo"><h1><FaTruck size={30}  style={{ verticalAlign: 'middle' }}/>SpedytorSzkolenia.pl</h1></div>
        <div className="menuicon">
            <FaBars/>
        </div>
        <div className="menu" style={styles.hero}>
          <div className="menu-links">
            <Link to="/">Start</Link>
            <Link to="/o-nas">O naszej platformie</Link>
            <Link to="/kursy">Kursy z certyfikatem</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
        </div>
        <div className="logging">
          <button>Zaloguj się</button>
          <button>Zarejestruj się</button>
        </div>
        </>
    )
}

export default Header