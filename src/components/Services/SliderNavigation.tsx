import { navigationList } from '../../data/services';

interface SliderNavigationProps {
  activeIndex: number;
  handleNavigationClick: (index: number) => void;
}

const SliderNavigation = ({
  activeIndex = 0,
  handleNavigationClick,
}: SliderNavigationProps) => {
  return (
    <ul className="flex flex-col gap-[16px] pt-[24px] md:pt-0 lg:gap-[24px]">
      {navigationList.map((el, index) => (
        <li
          key={el}
          className={`flex items-center 
        ${activeIndex === index ? 'active-slider' : ''}
        `}
        >
          <button
            type="button"
            className={`gap-[8px] text-left text-20 uppercase leading-[0.85] md:w-[186px] md:text-22 md:leading-[0.82] lg:text-28 lg:leading-[0.86] xl:w-[236px]
          ${
            activeIndex === index
              ? 'font-medium opacity-100'
              : 'opacity-50 transition-all duration-300 hover:pl-[8px] hover:opacity-100 focus:font-medium focus:opacity-100 focus:outline-1 focus:outline-white'
          }`}
            onClick={() => handleNavigationClick(index)}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SliderNavigation;
