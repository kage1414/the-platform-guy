import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ReactElement } from "react";

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
                  <Typography padding={1}>{t("title")}</Typography>
                </Button>
              </Link>
            </Box>
            <Box display="flex" flexWrap={"wrap"}>
              <Link href={"/"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("pages.home")}</Typography>
                </Button>
              </Link>
              <Link href={"/order"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("pages.order")}</Typography>
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("pages.about")}</Typography>
                </Button>
              </Link>
              <Link href={"/photos"}>
                <Button sx={{ color: "white" }} disableRipple>
                  <Typography padding={1}>{t("pages.photos")}</Typography>
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
