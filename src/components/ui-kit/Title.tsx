interface TitleProps {
  text1: string;
  text2: string;
};

const Title = ({ text1, text2 }: TitleProps) => {
  return (
    <h2 className="text-[40px] font-thin uppercase leading-[1.4] tracking-1.6 md:text-[67px] md:tracking-2.68 lg:text-[98px] lg:tracking-3.92">
      {text1}
      <span className="font-medium"> {text2}</span>
    </h2>
  );
};

export default Title;
