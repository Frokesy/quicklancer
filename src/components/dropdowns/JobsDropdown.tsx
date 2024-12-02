import { BrowseJobs, BrowseProjects, FindCompanies, ToolsIcon } from "../svgs/DropdownIcons";

const JobsDropdown = () => {
  return (
    <div className="absolute top-10 p-6 bg-[#fff] min-w-[60vw] shadow-2xl rounded-lg">
      <h2 className="text-[#0000E8] font-semibold">Find Jobs</h2>
      <div className="mt-6 flex space-x-10">
        <div className="flex space-x-3">
          <ToolsIcon />
          <div className="">
            <h2 className="font-semibold">Post a Service</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <BrowseProjects />
          <div className="">
            <h2 className="font-semibold">Browse Projects</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>

        <div className="flex space-x-3">
          <BrowseJobs />
          <div className="">
            <h2 className="font-semibold">Browse Jobs</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>

        <div className="flex space-x-3">
          <FindCompanies />
          <div className="">
            <h2 className="font-semibold">Find Companies</h2>
            <p className="text-[#808080] text-[14px]">
              Find the best solution for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDropdown;
