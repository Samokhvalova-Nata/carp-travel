export interface TitleProps {
  text1: string;
  text2: string;
}

const Title = ({text1, text2}: TitleProps) => {
  return (
      <h2 className="font-thin uppercase text-[40px] md:text-[67px] lg:text-[98px] tracking-1.6 md:tracking-2.68 lg:tracking-3.92 leading-[1.4]">
        {text1}
        <span className="font-medium"> {text2}</span>
      </h2>
  );
};

export default Title;
