const Openings = () => {
  const items = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "This position at Company XYZ requires an individual with experience in HTML, CSS, and JavaScript for frontend development. The ideal candidate should have a solid understanding of responsive design principles and experience working with popular frameworks like React or Angular.",
      location: "Washington, USA",
      remote: true,
      experience: "intermediate",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      desc: "Join our team as a Senior UI/UX Designer at ABC Corp. This role requires a high level of experience and expertise in user interface and user experience design.",
      location: "Barcelona, Spain",
      remote: true,
      experience: "Senior",
    },
    {
      id: 3,
      title: "Data Scientist",
      desc: "As a Data Scientist at JKL Analytics, you will be responsible for analyzing complex data sets, developing algorithms, and creating predictive models. The ideal candidate should have a strong background in statistics, machine learning, and programming languages such as Python or R. A Bachelor's degree in Computer Science, Statistics, Mathematics, or a related field is required, with a preference for candidates holding a Master's or Ph.D. level degree. Strong analytical skills, attention to detail, and the ability to communicate findings effectively are essential for this role.",
      location: "Antwerp, Belgium",
      remote: true,
      experience: "Senior",
    },
  ];
  return (
    <div className="w-[90vw] mx-auto my-[10vh]">
      <h2 className="text-[48px] font-semibold">Current Job Openings</h2>
    </div>
  );
};

export default Openings;
