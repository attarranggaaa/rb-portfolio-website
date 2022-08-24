import { ReactBricks } from "react-bricks/frontend";
import type { AppProps } from "next/app";
import config from "../react-bricks/config";

import "../css/style.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const reactBricksConfig = {
    ...config,
    contentClassName: "bg-primary font-poppins",
  };

  return (
    <ReactBricks {...reactBricksConfig}>
      <Component {...pageProps} />
    </ReactBricks>
  );
};

export default MyApp;
