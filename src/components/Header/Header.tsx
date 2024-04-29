'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

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
    if (isMobile) {
      setIsOpened(prev => !prev);
      document.body.style.overflow = isOpened ? 'auto' : 'hidden';
    }
    return;
  };

  return (
    <header className="flex items-center justify-between pb-[36px] pt-[36px] md:pb-[66px] md:pt-[25px] lg:pb-[72px] lg:pt-[24px]">
      <Logo />
      {isMobile ? (
        <>
          <MenuButton text="Menu" onClick={toggleMenuOpen}/>
          {isOpened && <MobileMenu onClick={toggleMenuOpen}/>}
        </>
      ) : (
        <NavMenu/>
      )}
    </header>
  );
};

export default Header;
