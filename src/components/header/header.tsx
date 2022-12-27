import { FunctionComponent } from 'react';
import logo from '../../assets/logo.png'; // with import
import './header.scss'

const Header:FunctionComponent = () => {
  return (
    <header className='header' data-testid='headerId'>
        <div className='header__logo'>
            <img src={logo} alt='' />
        </div>
        <nav className='header__nav'>
            <ul>
                <li>
                    <span>
                        Mi negocio
                    </span>
                </li>
                <li>
                    <span>
                        Ayuda
                    </span>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header