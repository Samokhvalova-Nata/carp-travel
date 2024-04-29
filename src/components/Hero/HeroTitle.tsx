import data from '@/data/titles.json';

const HeroTitle = () => {
  return (
    <div className="max-w-full sm:max-w-[426px] lg:max-w-[646px]">
      <h1 className="flex flex-col text-[40px] font-thin uppercase leading-[-0.14px] tracking-1.6 md:text-[67px] md:tracking-2.68 lg:text-[98px] lg:tracking-3.92">
        <span className="font-medium">{data.hero1}</span>
        {data.hero2}
      </h1>
    </div>
  );
};

export default HeroTitle;
