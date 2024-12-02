import { BrowseJobs, FindFreelancers, PostJob, PostProject } from "../svgs/DropdownIcons"

const FreelancersDropdown = () => {
  return (
<div className="absolute top-10 p-6 bg-[#fff] min-w-[60vw] shadow-2xl rounded-lg">
      <h2 className="text-[#0000E8] font-semibold">Find Freelancers</h2>
      <div className="mt-6 flex space-x-10">
        <div className="flex space-x-3">
          <PostProject />
          <div className="">
            <h2 className="font-semibold">Post a Project</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <PostJob />
          <div className="">
            <h2 className="font-semibold">Post a Job</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>

        <div className="flex space-x-3">
          <BrowseJobs />
          <div className="">
            <h2 className="font-semibold">Browse Gig Services</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>

        <div className="flex space-x-3">
          <FindFreelancers />
          <div className="">
            <h2 className="font-semibold">Find Freelancers</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>
      </div>
    </div>  )
}

export default FreelancersDropdown
