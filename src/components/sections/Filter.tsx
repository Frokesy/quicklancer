import CategoryDropdown from "../dropdowns/CategoryDropdown";
import ExperienceDropdown from "../dropdowns/ExperienceDropdown";
import {
  ExperienceIcon,
  LocationIcon,
  CategoriesIcon,
  SearchIcon,
} from "../svgs/Icons";
import CountryList from "react-select-country-list";

const Filter = () => {
  const options = CountryList().getData();

  return (
    <div>
      <div className="lg:w-[90vw] mx-auto lg:bg-[#fff] p-6 flex lg:space-x-2 lg:flex-row flex-col justify-between lg:space-y-0 space-y-6">
        <div className="flex items-center space-x-3 w-[100%] lg:w-auto">
          <SearchIcon />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="lg:bg-[#fff] bg-[#f1f1f1] border-b-2 border-[#ccc] py-3 outline-none w-[100%] lg:w-auto"
          />
        </div>
        <div className="flex items-center justify-between space-x-3 border border-[#ccc] py-3 px-3 rounded-lg">
          <LocationIcon />
          <select className="outline-none bg-inherit w-[100%]">
            <option value="">
              Select location
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-4 items-center">
          <CategoriesIcon />
          <div className="flex items-center justify-between w-[100%] py-3 border-b-2 border-[#ccc]">
            <CategoryDropdown />
          </div>
        </div>

        <div className="flex space-x-4 items-center lg:justify-between">
          <ExperienceIcon />
          <div className="flex items-center space-x-3 py-3 border-b-2 w-[100%] lg:w-auto justify-between border-[#ccc]">
            <ExperienceDropdown />
          </div>
        </div>
        <div className="">
          <button className="text-[#fff] bg-[#0000ff] rounded-lg py-3 px-6 font-semibold">
            Search my job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
