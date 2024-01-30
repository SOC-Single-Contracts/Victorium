import Button from "../components/Button";

function AboutSection() {
  return (
    <section
      id="research"
      className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left w-full gap-20 md:gap-32 my-24 md:my-32 px-12 md:px-32"
    >
      <div className="order-2 md:order-none">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Revolutionizing Design with AI
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Victoriam AI is revolutionizing the world of shoe and apparel design
          by blending advanced AI with real-time fashion trends. Our platform
          empowers designers, creatives, and brand strategists to generate
          innovative designs, perfectly aligned with current market demands.
          Experience the synergy of creativity and data-driven insights, where
          every design is a step into the future of fashion.
        </p>
        <Button>Learn More</Button>
      </div>
      <img className="w-full order-1 md:order-none" src="/about-1.png" />

      <img className="w-full order-3 md:order-none" src="/about-2.png" />
      <div className="order-4 md:order-none">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Harnessing Trends with Intelligent Design
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Our AI-driven platform doesn’t just create designs; it understands and
          integrates live trends to keep your creations at the forefront of
          fashion. Victoriam AI is a tool for those who lead in style and
          innovation. It's designed for decision-makers who value data-driven
          insights and for designers who thrive on creativity. Join us in
          shaping the future of apparel design, where trends meet technology,
          and every creation is a testament to innovation.
        </p>
      </div>

      <div id="api" className="order-6 md:order-none">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Integrate the Power of VictoriamAI
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Unlock the full potential of your creative and business applications
          with the Victoriam AI API. Designed for seamless integration, our API
          provides access to our advanced AI-driven design and trend analysis
          capabilities. Enhance your platforms with the power to generate
          cutting-edge designs, analyze fashion trends, and offer personalized
          style recommendations. Ideal for developers, product teams, and
          tech-savvy designers, the Victoriam AI API is your gateway to
          incorporating AI innovation into your digital ecosystem.
        </p>
        <Button arrow="true">View API</Button>
      </div>
      <img className="w-full order-5 md:order-none" src="/about-3.png" />
    </section>
  );
}

export default AboutSection;
