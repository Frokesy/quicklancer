import { useState } from "react";
import { ArrowDown, Hamburger, Logo } from "../svgs/Icons";
import Drawer from "./Drawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div className="bg-[#fff] fixed w-[100%] z-50">
      <div className="w-[90vw] mx-auto py-6 flex justify-between items-center">
        <div className="flex space-x-14">
          <div className="flex items-center space-x-3 lg:text-[24px] text-[20px] font-semibold">
            <Logo />
            <h2>Quicklancer</h2>
          </div>

          <div className="lg:flex hidden items-center space-x-6 text-[#667085]">
            <p>Home</p>
            <div className="flex items-center space-x-2">
              <p>Find Jobs</p>
              <ArrowDown />
            </div>
            <div className="flex items-center space-x-2">
              <p>Find Freelancers</p>
              <ArrowDown />
            </div>
            <p>Pricing Plans</p>
          </div>
        </div>

        <div className="flex lg:hidden" onClick={() => setOpenDrawer(true)}><Hamburger /></div>
        <div className="lg:flex hidden space-x-8">
          <button className="py-2 px-6 border border-[#ccc] text-[#404040] rounded-lg">Login</button>
          <button className="text-[#fff] bg-[#0000ff] py-2 px-6 rounded-lg font-semibold">Signup</button>
        </div>
      </div>

      {openDrawer && <Drawer setOpenDrawer={setOpenDrawer} />}
    </div>
  );
};

export default Header;
