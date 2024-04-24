export interface ParagrathProps {
  text: string;
}

const Paragrath = ({text}: ParagrathProps) => {
  return (
      <p className="md:text-13 lg:text-18 leading-[1.42] md:leading-[1.53] lg:leading-[1.33] md:text-justify">
        {text}
      </p>
  );
};

export default Paragrath;