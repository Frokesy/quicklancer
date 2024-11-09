import { FiveStars } from "../svgs/Icons";

const TopRated = () => {
  const freelancers = [
    {
      id: 1,
      name: "Gabriel Famakin",
      skill: "Website Developer",
      desc: "I will build your website design in maximum of 2 days",
      rate: "$1000 - $10000",
      avatar: "/assets/img-five.png",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Phoenix Wu-song",
      skill: "Engineering Manager",
      desc: "I will build your website design in maximum of 2 days",
      rate: "$1000 - $10000",
      avatar: "/assets/img-six.png",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Pajeet Fasnar",
      skill: "Product Manager",
      desc: "I will build your website design in maximum of 2 days",
      rate: "$1000 - $10000",
      avatar: "/assets/img-seven.png",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Demi Wilkinson",
      skill: "Frontend Developer",
      desc: "I will build your website design in maximum of 2 days",
      rate: "$1000 - $10000",
      avatar: "/assets/img-eight.png",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Gabriel Famakin",
      skill: "Website Developer",
      desc: "I will build your website design in maximum of 2 days",
      rate: "$1000 - $10000",
      avatar: "/assets/img-five.png",
      rating: 4.9,
    },
  ];
  return (
    <div className="py-[10vh] w-[90vw] mx-auto">
      <h2 className="font-semibold lg:text-[48px] text-[30px] text-center">
        Top Rated Freelancers
      </h2>
      <div className="flex justify-between overflow-x-auto lg:mt-20 mt-10 space-x-10">
        {freelancers.map((freelancer) => (
          <div
            className="bg-[#f2f2ff] w-[300px] flex-shrink-0"
            key={freelancer.id}
          >
            <img
              src={freelancer.avatar}
              alt={freelancer.id as unknown as string}
              className="w-[100%]"
            />
            <div className="mt-6 pb-4 px-4 space-y-4">
              <h2 className="font-semibold text-[20px]">{freelancer.name}</h2>
              <p className="text-[#222bcd] font-semibold">{freelancer.skill}</p>
              <p className="text-[#808080]">{freelancer.desc}</p>
              <div className="flex text-[14px] justify-between">
                <div className="flex">
                  <FiveStars />
                  <p className="">{freelancer.rating}</p>
                </div>
                <p className="text-[#808080] font-semibold">202 reviews</p>
              </div>
              <div className="flex justify-between text-[#404040]">
                <p>Rate</p>
                <p className="font-semibold">{freelancer.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
