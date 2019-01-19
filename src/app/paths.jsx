import Loading from "../components/loading";
import Loadable from "react-loadable";
import * as ROUTES from "../constants/routes";

const paths = [
  {
    path: ROUTES.LANDING,
    component: Loadable({
      loader: () => import("../pages/landing"),
      loading: Loading
    })
  }
];

export default paths;
