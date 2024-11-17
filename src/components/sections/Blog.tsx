const Blog = () => {
  return (
    <div className="w-[90vw] flex mx-auto">
      <div className="w-[50%]">
        <img src="/assets/blog-one.png" alt="blog-one" className="w-[100%]" />
      </div>
      <div className="bg-[#2626eb] w-[50%] p-10 space-y-6 text-[#fff]">
        <h2 className="text-[48px] font-semibold">
          Why Choose QuickLancer for Your Freelance Hiring Needs?
        </h2>
        <p className="text-[20px]">
          Access a diverse pool of skilled freelancers across all industries.
          Save time and resources with our easy-to-use platform, designed to
          quickly match you with the right talent. Get started on your projects
          faster and with confidence.
        </p>
      </div>
    </div>
  );
};

export default Blog;
