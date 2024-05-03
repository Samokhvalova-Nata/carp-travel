import { Link } from 'react-scroll';

import elements from '../../data/header.json';

interface NavMenuProps {
  onClick?: () => void;
  isOpened?: boolean;
}

const NavMenu = ({ onClick }: NavMenuProps) => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-[48px] md:flex-row md:gap-[24px] lg:gap-[56px]">
        {elements.map(({ to, children }) => (
          <li
            key={to}
            className="text-18 font-normal tracking-[1.8px] transition-all duration-300 hover:underline focus:underline focus:outline-1 focus:outline-white md:text-14 md:tracking-[1.4px]"
          >
            <Link
              to={to}
              smooth={true}
              duration={500}
              onClick={onClick}
              href="#"
              ignoreCancelEvents={true}
              className="transition-all duration-300 focus:outline-1 focus:outline-white"
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
