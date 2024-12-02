import { motion } from "framer-motion";
import { ArrowLeft } from "../svgs/Icons";
import React, { FC, SetStateAction } from "react";

interface DrawerProps {
  setOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
}

const Drawer: FC<DrawerProps> = ({ setOpenDrawer }) => {
  return (
    <>
      <div className="fixed top-0 h-screen z-50 w-screen bg-[#000] bg-opacity-60">
        <div className="justify-end flex">
          <motion.div
            className="flex flex-col space-y-[30px] h-screen bg-[#fff] w-[100%] pt-14 px-6 text-[18px] font-semibold text-[#000]"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "ease", stiffness: 60 }}
          >
            <div className="flex justify-end">
              <p onClick={() => setOpenDrawer(false)} className="border border-[#000] cursor-pointer h-8 w-8 text-center rounded-full">x</p>
            </div>
            <p>Home</p>
            <div className="flex justify-between items-center">
              <p>Find Jobs</p>
              <ArrowLeft />
            </div>
            <div className="flex justify-between items-center">
              <p>Find Freelancers</p>
              <ArrowLeft />
            </div>
            <p>Pricing Plans</p>
            <div className="flex justify-between fixed bottom-20 w-[90%]">
              <button className="py-2 px-6 border border-[#ccc] text-[#404040] rounded-lg">
                Login
              </button>
              <button className="text-[#fff] bg-[#0000ff] py-2 px-6 rounded-lg font-semibold">
                Signup
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
