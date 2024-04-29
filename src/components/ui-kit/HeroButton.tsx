interface HeroButtonProps {
  children: React.JSX.Element;
}

const HeroButton = ({ children }: HeroButtonProps) => {
  return (
    <button
      type="button"
      className="btn relative h-[53px] w-full bg-btnBgdLight text-lg font-bold uppercase leading-[2.66] transition-all duration-300 hover:bg-btnBgdHover focus:bg-btnBgdHover focus:outline-1 focus:outline-white md:bg-btnBgd md:leading-normal lg:h-[71px] lg:text-[32px]"
    >
      {children}
    </button>
  );
};

export default HeroButton;
