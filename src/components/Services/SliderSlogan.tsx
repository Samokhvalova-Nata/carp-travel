export interface SliderSloganProps {
  text: string;
}

const SliderSlogan = ({text}:SliderSloganProps) => {
  return (
    <p className="text-right md:text-left text-12 leading-[2] tracking-2.4">{text}</p>
  )
}

export default SliderSlogan
