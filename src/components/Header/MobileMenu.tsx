import MenuButton from './MenuButton';
import NavMenu from './NavMenu';

interface MobileMenuProps {
  onClick: () => void;
}

const MobileMenu = ({ onClick }: MobileMenuProps) => {
  return (
    <div className="fixed right-0 top-0 z-10 flex h-screen w-screen flex-col gap-[110px] bg-burgerBgd px-[20px] py-[43px] backdrop-blur-25">
      <div className="self-end">
        <MenuButton text="Close" onClick={onClick}/>
      </div>
      <NavMenu onClick={onClick}/>
    </div>
  );
};

export default MobileMenu;
