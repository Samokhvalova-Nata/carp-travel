
import Header from "@/components/Header/Header";
import HeroContent from "@/components/Hero/HeroContent";


const Hero = () => {
  return (
    <section className='w-full h-full hero'>
      <div className='container lg:pb-[80px]'>
        <Header />
        <HeroContent/>
      </div>
    </section>
  );
};

export default Hero;
