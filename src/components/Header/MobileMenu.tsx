import MenuButton from './MenuButton';
import NavMenu from './NavMenu';

export interface MobileMenuProps {
  onClick: () => void;
}

const MobileMenu = ({ onClick }: MobileMenuProps) => {
  return (
        <div className='fixed right-0 top-0 w-screen h-screen z-10 flex flex-col bg-burgerBgd backdrop-blur-25 py-[43px] px-[20px] gap-[110px] #data-menu'>
          <div className='self-end'>
            <MenuButton text="Close" onClick={onClick} />
          </div>
          <NavMenu onClick={onClick}/>
        </div>
  )
}

export default MobileMenu;
