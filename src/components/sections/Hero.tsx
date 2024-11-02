const Hero = () => {
  return (
    <div className="bg-[url('/assets/hero.png')] relative bg-no-repeat bg-cover w-[100%] min-h-screen">
      <div className="absolute top-0 w-[100%] h-[100%] bg-[#000] bg-opacity-60 flex flex-col items-center justify-center">
        <h2 className="lg:text-[72px] text-[48px] text-[#fff] lg:w-[65%] w-[90%] text-center font-semibold">
          Hire the best <span className="text-[#b0b0ff]">freelancers</span> for
          any job, online.
        </h2>
        <p className="text-[#fff] lg:text-[20px] lg:w-[25%] w-[90%] text-center mt-4">
          Work with the best freelance talent from around the world on our
          secure and cost-effective platform.
        </p>
      </div>
    </div>
  );
};

export default Hero;
