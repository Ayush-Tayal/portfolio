import { BsShop, BsCloudSunFill } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";

const ProjectsData = [
  {
    id: 1,
    title: 'ShopEasy',
    desc: 'E-commerce storefront with product browsing, cart, and checkout flow.',
    Icon: BsShop,
    accent: '#F59E0B',
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Ayush-Tayal/ShopEasy',
    live: 'https://ayush-tayal.github.io/ShopEasy/#/',
  },

  {
    id: 2,
    title: 'SkyCast',
    desc: 'Live weather detection with location search and current-conditions forecast.',
    Icon: BsCloudSunFill,
    accent: '#38BDF8',
    tags: ['React', 'Weather API', 'CSS3'],
    github: 'https://github.com/Ayush-Tayal/Weather-App',
    live: 'https://ayush-tayal.github.io/Weather-App/',
  },

  {
    id: 3,
    title: 'PulseChat',
    desc: 'Realtime messaging platform with instant message delivery across users.',
    Icon: IoChatbubblesSharp,
    accent: '#8B5CF6',
    tags: ['React', 'Socket.io', 'Node.js', 'Express'],
    github: 'https://github.com/Ayush-Tayal/Chat-App',
    live: 'https://ayush-tayal.github.io/Chat-App/',
  },
];

export default ProjectsData;
