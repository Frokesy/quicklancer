import { CaretRight } from "../svgs/Icons";

const About = () => {
  return (
    <div className="my-[10vh]">
      <div className="bg-[#ebebff] py-20">
        <div className="w-[90vw] mx-auto flex lg:flex-row flex-col-reverse justify-between bg-[#2626eb] items-center rounded-lg">
          <div className="lg:p-10 lg:w-[40%] text-[#fff] space-y-6 p-4">
            <h2 className="font-semibold lg:text-[48px] text-[24px]">How Quicklancer Works</h2>
            <p className="lg:text-[20px]">
              Our platform connects remote job seekers with employers from
              around the world. Simply search for a job, apply, and get hired.
              Employers can post jobs and find the best talent for their needs.
            </p>

            <button className="bg-[#fff] flex items-center space-x-3 py-2 px-6 rounded-lg">
                <span className="text-[#0000E8]">Get started</span>
                <CaretRight />
            </button>
          </div>
          <div className="lg:w-[50%] h-[100%]">
            <img src="/assets/img-four.png" className="w-[100%] lg:h-[490px] object-cover" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
