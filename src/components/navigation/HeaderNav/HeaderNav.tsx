import React, { ReactElement, useContext, useRef } from 'react'
import HeaderNavProps from './HeaderNavProps';
import { ImMenu } from 'react-icons/im';
import { VscColorMode } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';
import './HeaderNav.css';
import Button from '../../controls/Button/Button';
import ThemeContext from '../../../state/ThemeContext';
import useClickOutside from '../../../hooks/useClickOutside';

export default function HeaderNav({ isOpen, open, close }: HeaderNavProps) {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const ref = useRef(null);

  useClickOutside(ref, close);

  const handleThemeClick = () => {
    close();
    toggleTheme();
  };

  const handleThemeTouch = () => {
    close();
    toggleTheme();
  };

  const Ul = (): ReactElement => {
    const urls: {[key: string]: string} = {
      resume: 'https://danserio.com',
      codepen: 'https://codepen.io/radNoise',
      opinionflexr: 'https://opinionflexr.com'
    };

    return (
      <ul>
        {Object.keys(urls).map((key: string) => {
          return (
            <li key={key}>
              <a href={urls[key]}>{key}</a>
            </li>
          )
        })}
      </ul>
    );
  }

  return (
    <div className="header-nav">
      <div className="icon">
        <ImMenu onClick={open} onTouchEnd={open}/>
      </div>
      <nav className={isOpen ? 'open' : undefined} ref={ref}>
        <header>
          <IoMdClose onClick={close} onTouchEnd={close}/> 
        </header>
        <Ul />
        <footer>
          <Button className="subtle menu-btn" leftIcon={<VscColorMode />} onTouchEnd={handleThemeTouch} onClick={handleThemeClick}>Theme</Button>
        </footer>
      </nav>
    </div>
  )
}
