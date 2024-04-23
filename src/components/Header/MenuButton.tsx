export interface MenuButtonProps {
  text: string;
  onClick: () => void;
}

const MenuButton = ({ text, onClick }: MenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-normal uppercase tracking-normal text-white hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300"
    >
      {text}
    </button>
  );
};


export default MenuButton;