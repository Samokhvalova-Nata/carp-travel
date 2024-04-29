import Image from 'next/image';

interface SlideCardProps {
  item: {
    img: string;
    alt: string;
  };
};

const SlideCard = ({ item }: SlideCardProps) => {
  const { img, alt } = item;

  return (
    <Image
      alt={alt}
      src={img}
      priority
      width={280}
      height={213}
      className="mb-[12px] h-full w-full md:mb-0 md:h-[370px] md:w-[463px] md:object-cover lg:h-[429px] lg:w-[607px]"
    />
  );
};

export default SlideCard;
