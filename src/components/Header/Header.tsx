'use client';

import { useMediaQuery } from 'react-responsive';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <NavMenu />
    </header>
  );
};
