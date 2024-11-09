import { ProTick } from "../svgs/Icons";

const Plans = () => {
  return (
    <div className="w-[90vw] mx-auto my-[10vh]">
      <h2 className="font-semibold lg:text-[48px] text-[30px]">Membership Plans</h2>
      <div className="flex lg:flex-row flex-col justify-between lg:space-x-10 space-y-6 lg:space-y-0 mt-10">
        <div className="bg-[#e6e6ff] lg:p-10 px-6 py-10 lg:w-[32%] space-y-6 flex flex-col">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-[#00006B] font-semibold lg:text-[48px] text-[30px]">$0/mth</h2>
            <p className="text-[#00006B] font-semibold lg:text-[20px] text-[18px]">
              Free plan
            </p>
            <p className="text-[#00006B]">Billed annually</p>
          </div>
          <div className="pt-3 space-y-4 pb-6">
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Access to all basic features</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Project fee 10%</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">5 Bids</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">5 Skills</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Basic chat and email support</p>
            </div>
          </div>

          <button className="flex items-center justify-center bg-[#0000ff] text-[#fff] py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        <div className="bg-[#e6e6ff] p-10 lg:w-[32%] space-y-6 flex flex-col">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-[#00006B] font-semibold lg:text-[48px] text-[30px]">$10/mth</h2>
            <p className="text-[#00006B] font-semibold lg:text-[20px] text-[18px]">
              Basic plan
            </p>
            <p className="text-[#00006B]">Billed annually</p>
          </div>
          <div className="pt-3 space-y-4 pb-6">
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Access to all basic features</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Project fee 10%</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">20 Bids</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">20 Skills</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Priority chat and email support</p>
            </div>
          </div>

          <button className="flex items-center justify-center bg-[#0000ff] text-[#fff] py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        <div className="bg-[#e6e6ff] p-10 lg:w-[32%] space-y-6 flex flex-col">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-[#00006B] font-semibold lg:text-[48px] text-[30px]">$20/mth</h2>
            <p className="text-[#00006B] font-semibold lg:text-[20px] text-[18px]">
              Premium plan
            </p>
            <p className="text-[#00006B]">Billed annually</p>
          </div>
          <div className="pt-3 space-y-4 pb-6">
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Access to all basic features</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Project fee 7.5%</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">50 Bids</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">50 Skills</p>
            </div>
            <div className="flex items-center space-x-3">
              <ProTick />
              <p className="text-[#00006B]">Personalized + priority service</p>
            </div>
          </div>

          <button className="flex items-center justify-center bg-[#0000ff] text-[#fff] py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
