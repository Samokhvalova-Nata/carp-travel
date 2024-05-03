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
    <header className="absolute w-full pb-[36px] pt-[36px] md:pb-[66px] md:pt-[25px] lg:pb-[72px] lg:pt-[24px]">
      <div className="container flex items-center justify-between">
        <Logo />
        {isMobile ? (
          <>
            <MenuButton text="Menu" onClick={toggleMenuOpen} />
            {isOpened && <MobileMenu onClick={toggleMenuOpen} />}
          </>
        ) : (
          <NavMenu />
        )}
      </div>
    </header>
  );
};

export default Header;
