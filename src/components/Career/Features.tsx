import { features } from '../../data/career';

const Features = () => {
  return (
    <div className='md:flex flex-col items-end lg:items-start lg:ml-[40px] lg:w-[50%]'>
      <h3 className='my-[36px] pr-[39px] md:pr-0 md:mt-[12px] md:mb-[56px] lg:pl-[90px] lg:mt-[24px] lg:mb-[45px] text-30 lg:text-36 lg:leading-[1.8] uppercase text-right'>
        {features.subtitle}
      </h3>
      <ul className='pr-[99px] md:pr-0 flex flex-col items-end gap-[16px] md:gap-[24px] lg:md:gap-[21px] md:w-[225px] lg:w-[562px]'>
        {features.items.map(({id, title, description}) => (
          <li key={id} className='flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] '>
            <p className='font-normal md:text-16 lg:text-18 leading-[1.42] md:leading-[1.25] lg:leading-[1.33] text-right'>{title}</p>
            <p className='text-12 leading-[1.67] lg:leading-[2] text-right lg:text-left lg:w-[285px]'>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;

