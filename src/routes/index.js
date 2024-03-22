import { Components, Prompts } from "../pages";

const coreRoutes = [
  {
    path: "/prompts",
    title: "Prompts",
    component: Prompts,
  },
  {
    path: "/components",
    title: "components",
    component: Components,
  },
];

const routes = [...coreRoutes];
export default routes;
