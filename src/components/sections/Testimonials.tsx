const Testimonials = () => {
  const users = [
    {
      id: 1,
      name: "Aurelia Voss",
      skill: "Frontend Developer",
      remark: "This platform helped me find my dream job!",
      avatar: "/assets/tst-one.png",
    },
    {
      id: 2,
      name: "Benedict Thorne",
      skill: "UI/UX Designer",
      remark: "Easy to use and very effective",
      avatar: "/assets/tst-two.png",
    },
    {
      id: 3,
      name: "Cyrus Black",
      skill: "CEO, SecureTech",
      remark: "I found the best talent for my company here.",
      avatar: "/assets/tst-three.png",
    },
    {
      id: 4,
      name: "Benedict Thorne",
      skill: "UI/UX Designer",
      remark: "Easy to use and very effective",
      avatar: "/assets/tst-two.png",
    },
    {
      id: 5,
      name: "Cyrus Black",
      skill: "CEO, SecureTech",
      remark: "I found the best talent for my company here.",
      avatar: "/assets/tst-three.png",
    },
  ];
  return (
    <div className="my-[15vh] w-[90vw] mx-auto">
      <h2 className="lg:text-[48px] text-[32px] font-semibold text-center pb-10">Testimonials</h2>

      <div className="flex space-x-10 overflow-x-auto">
        {users.map((user) => (
          <div className="flex space-x-4 bg-[#f1f1f1] lg:p-6 p-4 rounded-2xl flex-shrink-0 w-[376px] lg:w-[420px]" key={user.id}>
            <img src={user.avatar} alt="img" className="w-[80px] h-[80px]" />
            <div className="">
              <h2 className="text-[20px] font-semibold">{user.name}</h2>
              <p>{user.skill}</p>
              <p className="pt-4">{user.remark}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
