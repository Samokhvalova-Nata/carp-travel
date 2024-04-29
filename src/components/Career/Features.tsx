import { features } from '../../data/career';

const Features = () => {
  return (
    <div className="flex-col items-end md:flex lg:ml-[40px] lg:w-[50%] lg:items-start">
      <h3 className="my-[36px] pr-[39px] text-right text-30 uppercase md:mb-[56px] md:mt-[12px] md:pr-0 lg:mb-[45px] lg:mt-[24px] lg:pl-[90px] lg:text-36 lg:leading-[1.8]">
        {features.subtitle}
      </h3>
      <ul className="flex flex-col items-end gap-[16px] pr-[99px] md:w-[225px] md:gap-[24px] md:pr-0 lg:w-[562px] lg:md:gap-[21px]">
        {features.items.map(({ id, title, description }) => (
          <li
            key={id}
            className="flex flex-col gap-[8px] lg:flex-row lg:gap-[24px] "
          >
            <p className="text-right font-normal leading-[1.42] md:text-16 md:leading-[1.25] lg:text-18 lg:leading-[1.33]">
              {title}
            </p>
            <p className="text-right text-12 leading-[1.67] lg:w-[285px] lg:text-left lg:leading-[2]">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
