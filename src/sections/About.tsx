import AboutParagrath from '@/components/About/AboutParagrath';
import Title from '@/components/ui-kit/Title';

import title from '@/data/titles.json';
import data from '@/data/about.json';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="flex flex-col md:gap-[64px] lg:gap-[72px]">
          <div className="md:flex md:items-start md:gap-[76px] lg:gap-[24px]">
            <Title text1={title.about1} text2={title.about2} />
            <div className="flex w-[180px] flex-col gap-[20px] pt-[8px] md:w-[221px] md:gap-[16px] md:pt-[16px] lg:w-[292px] lg:gap-[24px] lg:pt-[25px]">
              <AboutParagrath text1={data.strong1} text2={data.description1} />
              <AboutParagrath text1={data.strong2} text2={data.description2} />
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row-reverse lg:flex-row-reverse lg:items-center lg:justify-between">
            <div className="flex w-[180px] flex-col items-end self-end py-[40px] md:absolute md:bottom-[130px] md:left-[0px] md:w-[221px] md:py-0 lg:w-[297px] xl:static">
              <p className="self-start font-normal uppercase leading-[1.42] md:text-16 md:leading-[1.25] lg:text-18 lg:leading-[1.33]">
                {data.slogan1}
              </p>
              <p className="font-normal uppercase leading-[1.42] md:text-16 md:leading-[1.25] lg:text-18 lg:leading-[1.33]">
                {data.slogan2}
              </p>
              <p className="leading-[1.42] tracking-1.4 md:text-16 md:leading-[1.25] md:tracking-0.32 lg:text-18 lg:leading-[1.33] lg:tracking-2.16">
                {data.slogan3}
              </p>
            </div>

            <div className="md:max-w-[463px] lg:max-w-[605px]">
              <AboutParagrath text1={data.strong3} text2={data.description3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
