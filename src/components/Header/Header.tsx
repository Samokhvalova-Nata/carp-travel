'use client';

import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuButton from './MenuButton';
import MobileMenu from './MobileMenu';


const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  const toggleMenuOpen = () => {
    if(isMobile) {
      setIsOpened(prev => !prev);
      document.body.style.overflow = isOpened ? 'auto' : 'hidden';
    } return;
  };

  return (
    <header className="flex items-center justify-between pt-9 pb-9 md:pt-[25px] md:pb-[66px] lg:pt-[24px] lg:pb-[72px]">
      <Logo />
      {!isMobile ? (
        <NavMenu />
      ) : (
          
      <>
          
        <MenuButton text="Menu" onClick={toggleMenuOpen}/>
        {isOpened && <MobileMenu onClick={toggleMenuOpen}/>}
        </>
      )}
    </header>
  );
};

export default Header;

// {isMobile ? (
//         <>
//         <MenuButton text="Menu" onClick={toggleMenuOpen}/>
//         {isOpened && <MobileMenu onClick={toggleMenuOpen}/>}
//         </>
//       ) : (
//         <NavMenu />
//       )}
