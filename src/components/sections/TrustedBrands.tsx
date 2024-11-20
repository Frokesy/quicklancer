import {
  Adobe,
  ATT,
  Intel,
  Slack,
  Tmobile,
  Verizon,
  Webflow,
} from "../svgs/BrandLogos";

const TrustedBrands = () => {
  return (
    <div className="bg-[#eaeaf8] my-[10vh]">
      <div className="w-[90vw] mx-auto py-10">
        <h2 className="uppercase text-center text-[#808080] font-semibold">Trusted Brands</h2>
        <div className="flex items-center justify-between space-y-4 lg:space-y-0 mt-10 lg:flex-row flex-col">
          <div className="flex lg:w-[22%] lg:space-x-0 space-x-6 justify-between">
            <Adobe />
            <ATT />
          </div>
          <div className="flex lg:w-[40%] lg:space-x-0 space-x-6 justify-between">
            <Slack />
            <Intel />
            <Webflow />
          </div>
          <div className="flex lg:w-[22%] lg:space-x-0 space-x-6 justify-between">
            <Verizon />
            <Tmobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
