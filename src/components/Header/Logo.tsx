import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/icons/logo.svg';

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="logo"
      className="flex flex-col font-mono font-normal tracking-wide text-white focus:outline-white focus:ootline-1"
    >
      <Image
        src={logo}
        alt="travel company logo"
        width={59}
        height={21}
        className="w-[59px] h-[21px] md:w-[61px] md:h-[22px]"
      />
      CarpTravel
    </Link>
  );
}

export default Logo;
