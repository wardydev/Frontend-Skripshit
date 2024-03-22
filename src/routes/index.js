import { Components, Prompts, TitleIdeas } from "../pages";

const coreRoutes = [
  {
    path: "/prompts",
    title: "Prompts",
    component: Prompts,
  },
  {
    path: "/components",
    title: "Components",
    component: Components,
  },
  {
    path: "/title-idea",
    title: "Title Idea",
    component: TitleIdeas,
  },
];

const routes = [...coreRoutes];
export default routes;
