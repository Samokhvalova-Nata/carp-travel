interface SliderSloganProps {
  text: string;
};

const SliderSlogan = ({ text }: SliderSloganProps) => {
  return (
    <p className="text-right text-12 leading-[2] tracking-2.4 md:text-left">
      {text}
    </p>
  );
};

export default SliderSlogan;
