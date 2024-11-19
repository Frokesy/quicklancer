import {
  BlFour,
  BlOne,
  BlThree,
  BlTwo,
  DiagonalArrow,
} from "../svgs/BlogIcons";

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

  const blogPosts = [
    {
      id: 1,
      img: "/assets/blog-one.png",
      header: "Freelancing in UX design",
      content:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Richard Johanson",
      pubDate: "20 Aug 2024.",
      avatar: "/assets/avatars/av-one.png",
      section: "Design",
      ERT: "8 min read",
    },
    {
      id: 2,
      img: "/assets/blog-three.png",
      header: "Navigating the Challenges of Remote Work",
      content:
        "Discover how QuickLancer can simplify your software projects, sprints, tasks, and bug tracking while addressing the challenges of remote work.",
      author: "Ricky Harper",
      pubDate: "09 Oct 2024.",
      avatar: "/assets/avatars/av-two.png",
      section: "Design",
      ERT: "8 min read",
    },
    {
      id: 3,
      img: "/assets/blog-four.png",
      header: "Building your API Stack",
      content:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Adewale Gold",
      pubDate: "18 Sept 2024.",
      avatar: "/assets/avatars/av-three.png",
      section: "Design",
      ERT: "8 min read",
    },
    {
        id: 4,
        img: "/assets/blog-four.png",
        header: "Building your API Stack",
        content:
          "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        author: "Adewale Gold",
        pubDate: "18 Sept 2024.",
        avatar: "/assets/avatars/av-three.png",
        section: "Design",
        ERT: "8 min read",
      },
  ];
  return (
    <div className="">
      <div className="w-[90vw] flex lg:flex-row flex-col mx-auto">
        <div className="lg:w-[50%]">
          <img
            src="/assets/blog-one.png"
            alt="blog-one"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="bg-[#2626eb] lg:w-[50%] lg:p-10 p-4 space-y-6 text-[#fff]">
          <h2 className="lg:text-[48px] text-[30px] font-semibold mt-10 lg:mt-0">
            Why Choose QuickLancer for Your Freelance Hiring Needs?
          </h2>
          <p className="lg:text-[20px]">
            Access a diverse pool of skilled freelancers across all industries.
            Save time and resources with our easy-to-use platform, designed to
            quickly match you with the right talent. Get started on your
            projects faster and with confidence.
          </p>

          <div className="grid grid-cols-2 lg:gap-14 gap-10">
            {items.map((item) => (
              <div
                className="space-y-6 flex flex-col items-center text-center"
                key={item.id}
              >
                <div className="flex items-center lg:space-x-4 space-x-2">
                  {item.icon}
                  <h2 className="lg:text-[36px] text-[24px] font-semibold">
                    {item.heading}
                  </h2>
                </div>
                <p className="lg:text-[18px] font-semibold">{item.subtext}</p>
                <p className="lg:text-[16px] text-[14px]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[15vh] w-[90vw] mx-auto">
        <h2 className="text-[48px] font-semibold">Recent Blog</h2>

        <div className="flex space-x-10 overflow-x-auto mt-10">
          {blogPosts.map((blogPost) => (
            <div className="space-y-6 w-[405px] flex-shrink-0" key={blogPost.id}>
              <div className="w-[100%] h-[240px]">
                <img src={blogPost.img} alt="img" className="w-[100%] h-[100%] object-cover" />
              </div>
              <div className="flex font-semibold">
                <div className="bg-[#e6e6ff] py-1 pl-2 pr-4 flex items-center space-x-3 rounded-full text-[#2f2fc3] text-[14px]">
                  <p className="py-1 px-3 bg-[#fff] rounded-full">
                    {blogPost.section}
                  </p>
                  <p>{blogPost.ERT}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-[18px]">{blogPost.header}</h2>
                <DiagonalArrow />
              </div>
              <p className="">{blogPost.content}</p>
              <div className="flex items-center space-x-3">
                <img src={blogPost.avatar} alt="avatar" />
                <div className="space-y-1 text-[14px]">
                  <h2 className="font-semibold">{blogPost.author}</h2>
                  <p className="text-[#404040]">{blogPost.pubDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
