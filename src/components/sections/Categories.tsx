import Filter from "./Filter";
interface CategoriesProps {
  id: number;
  img: string;
  title: string;
  subtext: string;
}

const Categories = () => {
  const items: CategoriesProps[] = [
    {
      id: 1,
      title: "Web Development and Engineering",
      subtext:
        "Discover exciting opportunities in the field of Web Development and Engineering.",
      img: "/assets/img-one.png",
    },
    {
      id: 2,
      title: "Design and Creative",
      subtext: "Discover opportunities in the dynamic world of web design.",
      img: "/assets/img-two.png",
    },
    {
      id: 3,
      title: "Cyber Security",
      subtext: "Discover opportunities in the dynamic world of Cybersecurity.",
      img: "/assets/img-three.png",
    },
    {
      id: 4,
      title: "Cyber Security",
      subtext: "Discover opportunities in the dynamic world of Cybersecurity.",
      img: "/assets/img-three.png",
    },
  ];
  return (
    <div className="bg-[#f1f1f1] py-[10vh]">
      <Filter />
      <div className="mt-[10vh] w-[90vw] mx-auto">
        <h2 className="lg:text-[48px] text-[24px] font-semibold">
          Job Categories
        </h2>
        <div className="lg:mt-20 mt-10 flex space-x-10 overflow-x-auto">
          {items.map((item) => (
            <div
              className="flex flex-col space-y-6 items-center lg:w-[426px] w-[250px] flex-shrink-0"
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.id as unknown as string}
                className="lg:h-[420px] lg:w-[426px] h-[240px] w-[250px]"
              />
              <h2 className="font-semibold lg:text-[20px] text-center">
                {item.title}
              </h2>
              <p className="text-center lg:text-[16px] text-[14px]">
                {item.subtext}
              </p>
              <div className="">
                <button className="bg-[#0000ff] text-[#fff] px-6 py-2 rounded-lg text-[15px] font-semibold">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
