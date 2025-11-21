import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

  export const biodata = {
    name: "Wanda Aulia",
    title: "a Front-End Developer with 2+ years of experience",
    quote: ' "Why do normal when we can do the best? " ',
    location: "📍 Bekasi, Indonesia",
  };

  export const contact = [
    {
      icon: <FaGithub className="text-lg" />,
      link: "https://github.com/wandaaulia",
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      link: "https://linkedin.com/in/wanda-aulia",
    },
    {
      icon: <MdEmail className="text-lg" />,
      link: "mailto:wandaul21@gmail.com",
    },
  ];
