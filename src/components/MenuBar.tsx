import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

export const MenuBar = (): ReactElement => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            flexDirection="column"
          >
            <Box>
              <Link href={"/"}>
                <Button sx={{ color: "white" }}>
                  <Typography padding={1}>The Platform Guy</Typography>
                </Button>
              </Link>
            </Box>
            <Box display="flex">
              <Link href={"/"}>
                <Button sx={{ color: "white" }}>
                  <Typography padding={1}>Home</Typography>
                </Button>
              </Link>
              <Link href={"/platforms"}>
                <Button sx={{ color: "white" }}>
                  <Typography padding={1}>Platforms</Typography>
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button sx={{ color: "white" }}>
                  <Typography padding={1}>About</Typography>
                </Button>
              </Link>
              <Link href={"/photos"}>
                <Button sx={{ color: "white" }}>
                  <Typography padding={1}>Photos</Typography>
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button sx={{ color: "white" }}>
                  <Typography padding={1}>Contact</Typography>
                </Button>
              </Link>
            </Box>
            <Box></Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
