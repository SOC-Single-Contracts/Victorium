import Button from "../components/Button";

function HeroSection() {
  return (
    <a
      className="w-full text-center p-5 bg-hero-image min-h-[100vh] bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(17, 25, 32, 0.64) 0%, rgba(17, 25, 32, 0.64) 100%), url('/hero_background.png')",
      }}
    >
      <h2 className="leading-none text-[46px] md:text-[72px] font-bold text-white max-w-6xl">
        Embrace the Future of Shoe Design with Victoriam AI
      </h2>
      <p className="max-w-xl text-xl text-white mt-2">
        Where AI Meets Fashion: Revolutionizing Design and Trend Integration
      </p>
      <Button className="">Learn More</Button>
    </a>
  );
}

export default HeroSection;
