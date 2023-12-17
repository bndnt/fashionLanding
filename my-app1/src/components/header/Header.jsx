import logo from './../../img/icons/logo.svg'
import  './header.css'

function Header(){
    return(
        // <header className="header">
        <header className="header">
    <div className="container">
        <div className="header__row">
            <div className="header__logo">
                <a href="/">
                    <img src={logo} alt="logo"/>
                    <span className="header__logo-text">
                        FASHION
                    </span>
                </a>
            </div>
            <div className="header__nav">
                <ul className="header__ul">
                    <li>
                        <a href="#">CATALOGUE</a>
                    </li>
                    <li>
                        <a href="#">FASHION</a>
                    </li>
                    <li>
                        <a href="#">FAVOURITE</a>
                    </li>
                    <li>
                        <a href="#">LIFESTYLE</a>
                    </li>
                </ul>
                <div className="header__btn">
                    <a href="#">
                        SIGN UP
                    </a>
                </div>
            </div>
        </div>
    </div>
        </header>
    )
}

export default Header;