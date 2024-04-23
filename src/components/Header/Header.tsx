'use client';

import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuButton from './MenuButton';
import MobileMenu from './MobileMenu';


const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleMenuOpen = () => {
    setIsOpened(prev => !prev);
    document.body.style.overflow = isOpened ? 'auto' : 'hidden';
  };

  return (
    <header className="flex items-center justify-between pt-9 pb-9 md:pt-[25px] md:pb-[66px] lg:pt-[24px] lg:pb-[72px]">
      <Logo />
      {isMobile ? (
        <>
        <MenuButton text="Menu" onClick={toggleMenuOpen}/>
        {isOpened && <MobileMenu onClick={toggleMenuOpen}/>}
        </>
      ) : (
        <NavMenu />
      )}
    </header>
  );
};

export default Header;
