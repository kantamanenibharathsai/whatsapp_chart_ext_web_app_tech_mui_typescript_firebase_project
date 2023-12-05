import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MobileHome from "../mobile_home/MobileHome";
import DesktopHome from "../desktop_home/DesktopHome";

const Home = () => {
  const theme = useTheme();
  const isMobileView: boolean = useMediaQuery(theme.breakpoints.down("md"));

  return <div>{isMobileView ? <MobileHome /> : <DesktopHome />}</div>;
};

export default Home;
