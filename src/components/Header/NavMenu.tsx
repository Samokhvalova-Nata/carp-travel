'use client';

import { Link } from 'react-scroll';
import elements from '../../data/header.json';

export const NavMenu = () => {

  return (
    <nav>
      <ul className="flex flex-col items-center gap-12 md:flex-row md:gap-14">
        {elements.map(({ to, children }) => (
          <li
            key={to}
            className="focus:ootline-1 text-18 md:text-14 font-normal tracking-[1.8px] md:tracking-[1.4px]"
          >
            <Link
              to={to}
              smooth={true}
              duration={500}
              className="focus:outline-1 focus:outline-white"
            >
              {children}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
