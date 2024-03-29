import {
  BackgroundTopic,
  Components,
  Deposit,
  Login,
  PdfSummarize,
  Prompts,
  Register,
  TitleIdeas,
} from "../pages";

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
  {
    path: "/pdf-summarize",
    title: "PDF Summarize",
    component: PdfSummarize,
  },
  {
    path: "/backgorund-topic",
    title: "Background Topic",
    component: BackgroundTopic,
  },
  {
    path: "/deposit",
    title: "Deposit",
    component: Deposit,
  },
  {
    path: "/register",
    title: "Register",
    component: Register,
  },
  {
    path: "/login",
    title: "Login",
    component: Login,
  },
];

const routes = [...coreRoutes];
export default routes;
