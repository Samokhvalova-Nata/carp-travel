export interface ParagrathProps {
  text1: string;
  text2: string;
}

const Paragrath = ({text1, text2}: ParagrathProps) => {
  return (
      <p className="md:text-16 lg:text-18 leading-[1.42] md:leading-[1.25] lg:leading-[1.33]">
        <strong>{text1}</strong>
        {text2}
      </p>
  );
};

export default Paragrath;