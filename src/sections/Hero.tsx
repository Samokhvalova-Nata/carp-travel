import Header from '@/components/Header/Header';
import HeroContent from '@/components/Hero/HeroContent';

const Hero = () => {
  return (
    <section className="hero lg:pt-[105px]lg:pb-[104px] pb-[56px] pt-[105px] md:pb-[64px] md:pt-[130px]">
      <div className="container">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
