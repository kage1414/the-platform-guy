import { Box, Container, Paper } from "@mui/material";
import { PropsWithChildren, ReactElement } from "react";

export const PageContainer = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <Paper>
      <Box display="flex" justifyContent={"center"}>
        <Container maxWidth="md" sx={{ padding: 3 }}>
          {children}
        </Container>
      </Box>
    </Paper>
  );
};
