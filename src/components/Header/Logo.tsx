import Image from 'next/image';
import Link from 'next/link';

import data from '@/data/logo.json';

const Logo = () => {
  const { src, alt } = data;

  return (
    <Link
      href="/"
      aria-label="logo"
      className="focus:ootline-1 flex flex-col transition-transform duration-300 hover:scale-110 focus:outline-white"
    >
      <Image
        src={src}
        alt={alt}
        width={61}
        height={33}
        className="h-[33px] w-[61px] "
        priority
      />
    </Link>
  );
};

export default Logo;
