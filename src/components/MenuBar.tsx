import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const MenuBar = (): ReactElement => {
  const { t } = useTranslation("common");
  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          backgroundImage: `url('/wood-pattern.png')`,
        }}
      >
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
            <Box display="flex" flexWrap={"wrap"}>
              <Link href={"/"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("home")}</Typography>
                </Button>
              </Link>
              <Link href={"/order"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("order")}</Typography>
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("about")}</Typography>
                </Button>
              </Link>
              <Link href={"/photos"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("photos")}</Typography>
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
