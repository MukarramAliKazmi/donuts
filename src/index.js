import "./styles/global.css";

import { initRouter } from "./lib/router.js";
import { setFavicon } from "./utils/set-favicon.js";
import { handlePageTransition } from "./utils/handle-page-transition.js";

initRouter();
setFavicon();
handlePageTransition();

