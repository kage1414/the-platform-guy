import { Box, Paper } from "@mui/material";
import { PropsWithChildren, ReactElement } from "react";

export const PageContainer = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <Paper>
      <Box display="flex" justifyContent={"center"}>
        <Box padding={3} width="85vw">
          {children}
        </Box>
      </Box>
    </Paper>
  );
};
