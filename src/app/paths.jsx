import Loading from "../components/loading";
import Loadable from "react-loadable";
import * as ROUTES from "../constants/routes";

const paths = [
  {
    path: ROUTES.ROOT,
    component: Loadable({
      loader: () => import("../pages/landing"),
      loading: Loading
    })
  },
  {
    path: ROUTES.PROJECTS,
    component: Loadable({
      loader: () => import("../pages/landing"),
      loading: Loading
    })
  },
  {
    path: ROUTES.OTHERS,
    component: Loadable({
      loader: () => import("../pages/landing"),
      loading: Loading
    })
  },
  {
    path: ROUTES.ABOUT,
    component: Loadable({
      loader: () => import("../pages/landing"),
      loading: Loading
    })
  }
];

export default paths;
