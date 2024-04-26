export interface FormButtonProps {
  text: string;
}

const FormButton = (
  { text }: FormButtonProps
  ) => {
  return (
    <button
      type="submit"
      className="block ml-auto md:ml-0 mt-[16px] md:mt-0  font-medium text-30 lg:text-32 uppercase leading-normal  hover:underline focus:underline focus:outline-1 focus:outline-white transition-all duration-300">
      {text}
    </button>
  );
};


export default FormButton;