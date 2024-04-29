interface SliderButtonProps {
  text: string;
  ariaLabel: string;
  pos: string;
}

const SliderButton = ({ text, ariaLabel, pos }: SliderButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`${pos} text-right uppercase transition-all duration-300 hover:underline focus:underline focus:outline-1 focus:outline-white`}
    >
      {text}
    </button>
  );
};

export default SliderButton;
