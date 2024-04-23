'use client';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import elements from '../../data/header.json';

export interface NavMenuProps {
  onClick?: () => void;
  isOpened?: boolean;
}

const NavMenu = ({onClick}:NavMenuProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav>
      <ul className="flex flex-col items-center gap-12 md:flex-row md:gap-6 lg:gap-14">
        {elements.map(({ to, children }) => (
          <li
            key={to}
            className="text-18 md:text-14 font-normal tracking-[1.8px] md:tracking-[1.4px] hover:underline focus:underline focus:outline-1 transition-all duration-300"
          >
            <Link
              to={to}
              smooth={true}
              duration={500}
              className="focus:outline-1 focus:outline-white"
              onClick={onClick} 
            >
              {children}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
