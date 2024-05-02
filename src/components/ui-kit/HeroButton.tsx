import { Link } from 'react-scroll';

const HeroButton = () => {
  return (
    <Link
      to="contacts"
      smooth={true}
      duration={500}
      className="btn relative flex h-[53px] w-full items-center justify-center bg-btnBgdLight text-lg font-bold uppercase leading-[2.66] transition-all duration-300 hover:bg-btnBgdHover focus:bg-btnBgdHover focus:outline-1 focus:outline-white md:bg-btnBgd md:leading-normal lg:h-[71px] lg:text-[32px]"
    >
      JOIN NOW
    </Link>
  );
};

export default HeroButton;
