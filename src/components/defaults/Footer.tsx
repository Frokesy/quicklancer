import { Logo } from "../svgs/Icons";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  Youtube,
} from "../svgs/SocialIcons";

const Footer = () => {
  return (
    <div className="bg-[#3c3e43] py-20">
      <div className="w-[90vw] mx-auto flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[35%] space-y-4">
          <div className="flex items-center space-x-3">
            <Logo />
            <h2 className="text-[24px] text-[#fff] font-semibold">
              Quicklancer
            </h2>
          </div>
          <p className="text-[#C0C0C0]">
            Aenean sodales mattis augue. Morbi euismod, felis at volutpat
            volutpat, quam lectus porttitor massa, tur ex a neque pulvinar
            pulvinar.
          </p>
        </div>
        <div className="lg:w-[60%] flex lg:flex-row flex-col space-y-8 lg:space-y-0 mt-8 lg:mt-0 justify-between">
          <div className="lg:w-[20%] space-y-4">
            <h2 className="text-[18px] text-[#fff] font-semibold">
              My Account
            </h2>
            <p className="text-[#C0C0C0] text-[14px]">Login</p>
            <p className="text-[#C0C0C0] text-[14px]">Register</p>
            <p className="text-[#C0C0C0] text-[14px]">Post Project</p>
            <p className="text-[#C0C0C0] text-[14px]">Post a Job</p>
          </div>
          <div className="lg:w-[20%] space-y-4">
            <h2 className="text-[18px] text-[#fff] font-semibold">
              Helpful Links
            </h2>
            <p className="text-[#C0C0C0] text-[14px]">Countries</p>
            <p className="text-[#C0C0C0] text-[14px]">Blog</p>
            <p className="text-[#C0C0C0] text-[14px]">Sitemap</p>
            <p className="text-[#C0C0C0] text-[14px]">Feedback</p>
            <p className="text-[#C0C0C0] text-[14px]">Contact</p>
          </div>
          <div className="lg:w-[20%] space-y-4">
            <h2 className="text-[18px] text-[#fff] font-semibold">
              Information
            </h2>
            <p className="text-[#C0C0C0] text-[14px]">FAQ</p>
            <p className="text-[#C0C0C0] text-[14px]">Testimonials</p>
            <p className="text-[#C0C0C0] text-[14px]">Advertise Here</p>
          </div>
          <div className="lg:w-[20%] space-y-4">
            <h2 className="text-[18px] text-[#fff] font-semibold">Legal</h2>
            <p className="text-[#C0C0C0] text-[14px]">Terms of Service</p>
            <p className="text-[#C0C0C0] text-[14px]">Privacy Policy</p>
            <p className="text-[#C0C0C0] text-[14px]">Cookie Policy</p>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#808080] py-6"></div>

      <div className="pt-10 flex lg:flex-row flex-col justify-between w-[90vw] items-center space-y-3 lg:space-y-0 mx-auto">
        <p className="text-[#c0c0c0]">2024 Ricketts Jobs, All right reserved</p>
        <div className="flex space-x-3 items-center">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
          <Pinterest />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
