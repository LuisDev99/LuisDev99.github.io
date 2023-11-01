export interface Project {
  title: string;
  imgUrl: string;
  description: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Chat Assistant",
    description:
      "A full-stack chat assistant made in React and .Net Core and Luis as the natural language model",
    githubUrl: "https://github.com/LuisDev99/Lumik",
    imgUrl:
      "https://www.liveagent.com/app/uploads/2022/07/Chat-help-desk-software-homepage.png",
  },
  {
    title: "Bounty Zone",
    description:
      "A full-stack react strategy game that allows players to place bounties on their opponents and earn money",
    githubUrl: "https://github.com/LuisDev99/BountyZone-frontend",
    imgUrl:
      "https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/09/24/among-us-how-to-play-guide-header-update_feature.jpg",
  },
];
