export interface SlideCounterProps {
  index: number;
}

const SlideCounter = ({ index }:SlideCounterProps) => {
  return (
    <p className="text-right font-thin text-[43px] md:text-[67px] lg:text-[98px]  md:leading-[1.16] lg:leading-normal">
      {`0${index}/`}
        <span className="text-activeIdx">05</span>
    </p>
  )
}

export default SlideCounter
