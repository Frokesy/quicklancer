import { Belgium, Spain, US } from "../svgs/Flags";
import { IntermediateExpIcon, SeniorExpIcon, WFH } from "../svgs/Icons";

const Openings = () => {
  const items = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "This position at Company XYZ requires an individual with experience in HTML, CSS, and JavaScript for frontend development. The ideal candidate should have a solid understanding of responsive design principles and experience working with popular frameworks like React or Angular.",
      location: "Washington, USA",
      flag: <US />,
      remote: true,
      experience: "intermediate",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      desc: "Join our team as a Senior UI/UX Designer at ABC Corp. This role requires a high level of experience and expertise in user interface and user experience design.",
      location: "Barcelona, Spain",
      flag: <Spain />,
      remote: true,
      experience: "Senior",
    },
    {
      id: 3,
      title: "Data Scientist",
      desc: "As a Data Scientist at JKL Analytics, you will be responsible for analyzing complex data sets, developing algorithms, and creating predictive models. The ideal candidate should have a strong background in statistics, machine learning, and programming languages such as Python or R. A Bachelor's degree in Computer Science, Statistics, Mathematics, or a related field is required, with a preference for candidates holding a Master's or Ph.D. level degree. Strong analytical skills, attention to detail, and the ability to communicate findings effectively are essential for this role.",
      location: "Antwerp, Belgium",
      flag: <Belgium />,
      remote: false,
      experience: "Senior",
    },
  ];
  return (
    <div className="w-[90vw] mx-auto my-[10vh]">
      <h2 className="lg:text-[48px] text-[24px] font-semibold">Current Job Openings</h2>
      <div className="flex flex-col space-y-6 mt-6">
        {items.map((item) => (
          <div className="bg-[#f2f2ff] p-6" key={item.id}>
            <h2 className="font-semibold lg:text-[20px]">{item.title}</h2>
            <p className="mt-2 lg:text-[16px] text-[14px]">{item.desc}</p>
            <div className="flex lg:flex-row flex-col lg:text-[16px] text-[14px] justify-between mt-6 lg:items-center">
              <div className="flex lg:space-x-20 lg:flex-row flex-col">
                <div className="flex items-center space-x-3 text-[#25324B]">
                  {item.flag}
                  <p>{item.location}</p>
                </div>
                <div className="flex lg:space-x-20 mt-6 lg:mt-0 space-x-6">
                  <div className="bg-[#dcddff] text-[#222bcd] flex items-center space-x-3 py-2 pl-3 pr-8 rounded-lg">
                    <WFH />
                    <p className="">{item.remote ? "Remote" : "On-site"}</p>
                  </div>
                  <div
                    className={`flex items-center space-x-3 capitalize ${
                      item.experience === "intermediate" &&
                      "bg-[#e9c3ed] text-[#732a7a]"
                    } ${
                      item.experience === "Senior" &&
                      "bg-[#eefaf4] text-[#1a5e25]"
                    } py-2 px-4 rounded-lg`}
                  >
                    {item.experience === "intermediate" ? (
                      <IntermediateExpIcon />
                    ) : (
                      <SeniorExpIcon />
                    )}
                    <p className="">{item.experience}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0">
                <button className="text-[#fff] bg-[#0000ff] py-2 px-6 rounded-lg font-semibold">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Openings;
