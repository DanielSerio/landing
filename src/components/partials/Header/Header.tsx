import React from 'react'
import { useState } from 'react'
import HeaderNav from '../../navigation/HeaderNav/HeaderNav'
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo-area">
        <h1 className="logo">Dan Serio</h1><small>dserio.d@gmail.com</small>
      </div>
      <HeaderNav isOpen={isOpen} open={openMenu} close={closeMenu}/>
    </header>
  )
}
