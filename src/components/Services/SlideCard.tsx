import Image from "next/image"

export interface SlideCardProps {
  item: {
    img: string;
    alt: string;
  };
}

const SlideCard = ({item}: SlideCardProps) => {
  const { img, alt} = item;

  return (
    <>
      <Image 
        alt={alt} 
        loading='lazy' 
        src={img}  
        width={280}
        height={213}
        className="mb-[12px] md:mb-0 w-full h-full md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px] md:object-cover"/>
    </>
  )
}

export default SlideCard;
