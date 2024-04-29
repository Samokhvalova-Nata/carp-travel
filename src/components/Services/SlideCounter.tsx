interface SlideCounterProps {
  index: number;
};

const SlideCounter = ({ index }: SlideCounterProps) => {
  return (
    <p className="text-right text-[43px] font-thin md:text-[67px] md:leading-[1.16] lg:text-[98px] lg:leading-normal">
      {`0${index}/`}
      <span className="text-activeIdx">05</span>
    </p>
  );
};

export default SlideCounter;
