import data from '@/data/hero.json';

const Slogan = () => {
  return (
    <>
      <p className="text-[37px] font-thin uppercase leading-none tracking-1.665 md:text-[67px] md:tracking-8.71 lg:text-[98px] lg:tracking-1.4">
        <span className="font-medium">{data.slogan1}</span>
        {data.slogan2}
      </p>
      <p className="text-xs font-thin leading-none tracking-9.48 md:text-sm md:tracking-25.9 lg:text-base lg:tracking-36.48">
        {data.slogan3}
      </p>
    </>
  );
};

export default Slogan;
