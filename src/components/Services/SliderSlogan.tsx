interface SliderSloganProps {
  text: string;
  activeIndex: number;
}

const SliderSlogan = ({ text, activeIndex }: SliderSloganProps) => {
  return (
    <p
      className={`text-right text-12 leading-[2] tracking-2.4 md:text-left lg:text-right
    ${activeIndex === 1 ? 'lg:pt-[46px]' : ''}
    ${activeIndex === 2 ? 'lg:pt-[89px]' : ''}
    ${activeIndex === 3 ? 'lg:pt-[164px]' : ''}
    ${activeIndex === 4 ? 'lg:pt-[209px]' : ''}
    `}
    >
      {text}
    </p>
  );
};

export default SliderSlogan;
