interface ParagrathProps {
  text: string;
};

const Paragrath = ({ text }: ParagrathProps) => {
  return (
    <p className="leading-[1.43] md:text-justify md:text-13 md:leading-[1.53] lg:text-18 lg:leading-[1.33]">
      {text}
    </p>
  );
};

export default Paragrath;
