import { useEffect } from "react";
import Portfolio from "../../components/portfolio/Portfolio";
import Using from "../../components/using/Using";
import AboutHero from "../../components/abouthero/AboutHero";
import Dev from "../../components/dev/Dev";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutHero display={display} setDisplay={setDisplay} />
      <Dev />
      <Using />
      <Portfolio />
    </>
  );
};

export default About;
