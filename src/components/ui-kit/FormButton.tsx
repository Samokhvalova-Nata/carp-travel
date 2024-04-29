interface FormButtonProps {
  text: string;
};

const FormButton = ({ text }: FormButtonProps) => {
  return (
    <button
      type="submit"
      className="ml-auto mt-[16px] block text-30 font-medium uppercase leading-normal transition-all duration-300 hover:underline focus:underline focus:outline-1 focus:outline-white md:ml-0 md:mt-0 lg:text-32"
    >
      {text}
    </button>
  );
};

export default FormButton;
