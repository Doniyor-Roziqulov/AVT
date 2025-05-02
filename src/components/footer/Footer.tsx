import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-10 lg:pb-20 pt-28 lg:pt-[250px] bg-[#1d2b3a] relative border-t">
      <p className="text-[80px] lg:text-[200px] text-skills z-10 text-slate-800 font-semibold absolute top-[-30px] lg:top-[-60px] pointer-events-none lg:left-[70px]">
        The End
      </p>
      <div className="mx-auto container z-30">
        <div className="flex flex-col items-center gap-y-20">
          <p className="text-4xl lg:text-6xl text-neutral-400 z-30">
            FOLLOW ME
          </p>
          <div className="grid grid-cols-4 gap-x-10 h-[100px]">
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://t.me/TATU_TTF_Rasmiy_kanal"
            >
              <FaTelegram className="text-white text-4xl" />
            </a>
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://www.instagram.com/tuit.official/?hl=ru"
            >
              <FaInstagram className="text-white text-4xl" />
            </a>
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://tuit.uz/"
            >
              <FaGithub className="text-white text-4xl" />
            </a>
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://www.linkedin.com/school/tuit-uzbekistan/?originalSubdomain=uz"
            >
              <FaLinkedin className="text-white text-4xl" />
            </a>
          </div>
        </div>
        <p className="text-orange-50 pl-12">
          © 2024 - Creative Frontend Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
