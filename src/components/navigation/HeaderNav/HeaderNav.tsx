import React, { ReactElement, useContext } from 'react'
import HeaderNavProps from './HeaderNavProps';
import { ImMenu } from 'react-icons/im';
import { VscColorMode } from 'react-icons/vsc';
import { IoMdClose } from 'react-icons/io';
import './HeaderNav.css';
import Button from '../../controls/Button/Button';
import ThemeContext from '../../../state/ThemeContext';

export default function HeaderNav({ isOpen, open, close }: HeaderNavProps) {
  const [theme, toggleTheme] = useContext(ThemeContext);

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

  const handeThemeClick = () => {
    close();
    toggleTheme();
  };

  return (
    <div className="header-nav">
      <div className="icon">
        <ImMenu onClick={open}/>
      </div>
      <nav className={isOpen ? 'open' : undefined}>
        <header>
          <IoMdClose onClick={close}/> 
        </header>
        <Ul />
        <footer>
          <Button leftIcon={<VscColorMode />} onClick={handeThemeClick}>Theme</Button>
        </footer>
      </nav>
    </div>
  )
}
