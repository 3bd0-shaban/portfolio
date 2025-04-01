import { personalInfo } from "@/config/siteConfig";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineX,
} from "react-icons/ai";

export const SocialMedia = [
  {
    icon: AiOutlineGithub,
    link: personalInfo.social.github,
    color: "hover:text-purple-400",
    label: "GitHub",
  },
  {
    icon: AiOutlineLinkedin,
    link: personalInfo.social.linkedin,
    color: "hover:text-blue-400",
    label: "LinkedIn",
  },
  {
    icon: AiOutlineX,
    link: personalInfo.social.x,
    color: "hover:text-cyan-400",
    label: "Twitter",
  },
];
