import Header from '@/components/Header/Header';
import HeroContent from '@/components/Hero/HeroContent';

const Hero = () => {
  return (
    <section className="hero pb-[56px] md:pb-[64px] lg:pb-[104px]">
      <div className="container">
        <Header />
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
