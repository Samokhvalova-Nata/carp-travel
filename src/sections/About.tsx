import Paragrath from '@/components/ui-kit/Paragrath';
import Title from '@/components/ui-kit/Title';
import title from '@/data/titles.json';
import data from '@/data/about.json';


const About = () => {
  return (
    <section id="about" className='about section'>
      <div className='container'>
        <div className='flex flex-col md:gap-[64px] lg:gap-[72px] '>

        <div className='md:flex md:gap-[76px] lg:gap-[24px] md:items-start'>
          <Title text1={title.about1} text2={title.about2}/>
          <div className='flex flex-col gap-[20px] md:gap-[16px] lg:gap-[24px] w-[180px] md:w-[221px] lg:w-[292px] pt-[8px] md:pt-[16px] lg:pt-[25px]'>
            <Paragrath text1={data.strong1} text2={data.description1}/>
            <Paragrath text1={data.strong2} text2={data.description2}/>
          </div>
        </div>
        
        <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse   lg:items-center lg:justify-between relative'>

          <div className='self-end flex flex-col items-end py-[40px] md:py-0 w-[180px] md:w-[221px] lg:w-[297px] md:absolute md:bottom-[130px] md:left-[0px] xl:static'>
            <p className='uppercase font-normal md:text-16 lg:text-18 leading-[1.42] md:leading-[1.25] lg:leading-[1.33] self-start'>
              {data.slogan1}
            </p>
            <p className='uppercase font-normal md:text-16 lg:text-18 leading-[1.42] md:leading-[1.25] lg:leading-[1.33]'>
              {data.slogan2}
            </p>
            <p className='md:text-16 lg:text-18 leading-[1.42] md:leading-[1.25] lg:leading-[1.33] tracking-1.4 md:tracking-0.32 lg:tracking-2.16'>
              {data.slogan3}
            </p>
          </div>
          
          <div className='md:max-w-[463px] lg:max-w-[605px]'>
            <Paragrath text1={data.strong3} text2={data.description3}/>
          </div>
          
        </div>

        </div>
      </div>

    </section>
  );
};

export default About;
