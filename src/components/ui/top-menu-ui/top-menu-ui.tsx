import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { RightMenuUi } from "../right-menu-ui";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

const ElevationScroll = (props: Props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
};

const anchorLinks = (link: string) => {
  const element = document.querySelector(link);
  if (element)
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
};

export const TopMenuUi = ({ pages }: { pages: Array<string> }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar sx={{ bgcolor: "#f7dc52" }}>
          <Toolbar>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={require("../../../assets/img/logo.png")}
                  alt=""
                  width={40}
                  height={40}
                />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{ ml: 3, color: "black", display: "block" }}
                      onClick={() => anchorLinks("#" + page)}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Box>
              <RightMenuUi />
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};
