import { BlFour, BlOne, BlThree, BlTwo } from "../svgs/BlogIcons";

const Blog = () => {
  const items = [
    {
      id: 1,
      heading: "Over 15k+",
      subtext: "Projects completed",
      content:
        "Trusted by businesses worldwide with over 15,000 successful projects across various industries.",
      icon: <BlOne />,
    },
    {
      id: 2,
      heading: "Over 1k+",
      subtext: "Freelancers worldwide",
      content:
        "Access a global network of over 1,000 skilled freelancers ready to tackle any project.",
      icon: <BlTwo />,
    },
    {
      id: 3,
      heading: "500+",
      subtext: "Job Categories",
      content:
        "Find freelancers in over 500 job categories, covering all fields and specialties.",
      icon: <BlThree />,
    },
    {
      id: 4,
      heading: "4.5/5",
      subtext: "High Client reviews",
      content:
        "Rated 4.5 out of 5, QuickLancer is trusted by clients for quality, efficiency, and reliability.",
      icon: <BlFour />,
    },
  ];
  return (
    <div className="w-[90vw] flex lg:flex-row flex-col mx-auto">
      <div className="lg:w-[50%]">
        <img src="/assets/blog-one.png" alt="blog-one" className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="bg-[#2626eb] lg:w-[50%] lg:p-10 p-4 space-y-6 text-[#fff]">
        <h2 className="lg:text-[48px] text-[30px] font-semibold mt-10 lg:mt-0">
          Why Choose QuickLancer for Your Freelance Hiring Needs?
        </h2>
        <p className="lg:text-[20px]">
          Access a diverse pool of skilled freelancers across all industries.
          Save time and resources with our easy-to-use platform, designed to
          quickly match you with the right talent. Get started on your projects
          faster and with confidence.
        </p>

        <div className="grid grid-cols-2 lg:gap-14 gap-10">
          {items.map((item) => (
            <div className="space-y-6 flex flex-col items-center text-center" key={item.id}>
              <div className="flex items-center lg:space-x-4 space-x-2">
                {item.icon}
                <h2 className="lg:text-[36px] text-[24px] font-semibold">{item.heading}</h2>
              </div>
              <p className="lg:text-[18px] font-semibold">{item.subtext}</p>
              <p className="lg:text-[16px] text-[14px]">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
