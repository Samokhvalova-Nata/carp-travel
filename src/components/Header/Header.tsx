'use client';

import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuButton from './MenuButton';


const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleMenuOpen = () => {
    setIsOpened(prev => !prev);
    if (isMobile) {
      document.body.style.overflow = isOpened ? 'auto' : 'hidden';
    }
  };

  return (
    <header className="z-10 flex items-center justify-between pt-9 pb-9 md:pt-[25px] md:pb-[66px] lg:pt-6 lg:pb-12">
      <Logo />
      {isMobile ? (
        <MenuButton text="Menu" onClick={toggleMenuOpen}/>
      ) : (
        <NavMenu />
      )}
      {/* TODO Mobile menu */}
    </header>
  );
};

export default Header;
