import Image from "next/image";
import Link from "next/link";
import logo from '../public/icons/logo.svg';

export const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="logo"
      className="focus:outline-white focus:ootline-1"
    >
      <Image src={logo} alt="travel company logo" width={59} height={21} />
      CarpTravel
    </Link>
  );
}
