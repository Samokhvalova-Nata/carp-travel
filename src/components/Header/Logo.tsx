import Image from 'next/image';
import Link from 'next/link';

import data from '@/data/logo.json';

const Logo = () => {
  const { src, text, alt } = data;

  return (
    <Link
      href="/"
      aria-label="logo"
      className="focus:ootline-1 flex flex-col font-mono font-normal tracking-2.59 text-white transition-transform duration-300 hover:scale-110 focus:outline-white"
    >
      <Image
        src={src}
        alt={alt}
        width={59}
        height={21}
        className="h-[21px] w-[59px] md:h-[22px] md:w-[61px]"
        priority
      />
      {text}
    </Link>
  );
};

export default Logo;
