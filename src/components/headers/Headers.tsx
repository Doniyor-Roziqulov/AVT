import { NavLink } from "react-router-dom";
import logo from "../../images/logo2.png";
import { RiContactsLine, RiHomeLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";

const Headers: React.FC = () => {
  return (
    <header className="relative z-[60] hidden lg:block">
      <div className="w-[200px] pt-6 fixed top-0 right-0 z-10 h-full bg-black border-l">
        <div className="flex justify-center">
          <NavLink to={"/"}>
            <img
              className="bg-white rounded-full w-[90px] rotating-image"
              src={logo}
              alt="logo"
            />
          </NavLink>
        </div>
        <ul className="flex flex-col px-8  gap-y-5 mt-14 header__list">
          <li>
            <NavLink
              className="text-gray-400 text-2xl border-y border-black flex py-1 items-center font-semibold transition-all gap-x-2 hover:text-gray-700"
              to={"/"}
            >
              <RiHomeLine />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-400 text-2xl border-y border-black flex py-1 items-center font-semibold transition-all gap-x-2 hover:text-gray-700"
              to={"/about"}
            >
              <FiAlertCircle /> About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-400 text-2xl border-y border-black flex py-1 items-center font-semibold transition-all gap-x-2 hover:text-gray-700"
              to={"/contact"}
            >
              <RiContactsLine /> Contact
            </NavLink>
          </li>
        </ul>
        <p className="text-gray-300 text-center relative top-[350px]">avt.uz</p>
      </div>
    </header>
  );
};

export default Headers;
