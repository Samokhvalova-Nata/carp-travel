interface ParagrathProps {
  text1: string;
  text2: string;
}

const Paragrath = ({ text1, text2 }: ParagrathProps) => {
  return (
    <p className="leading-[1.42] md:text-16 md:leading-[1.25] lg:text-18 lg:leading-[1.33]">
      <strong>{text1}</strong>
      {text2}
    </p>
  );
};

export default Paragrath;
