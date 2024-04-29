export interface SliderButtonProps {
  text: string;
  ariaLabel?: string;
  pos: string
};

const SliderButton = ({ text, ariaLabel, pos }: SliderButtonProps) => {
  return (
    <button type='button' aria-label={ariaLabel}
      className={`${pos} uppercase text-right hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300`}>
      {text}
    </button>
  );
};

export default SliderButton;
