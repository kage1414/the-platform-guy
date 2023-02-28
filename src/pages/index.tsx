import { HomePage } from "@/components/HomePage";
import { MenuBar } from "@/components/MenuBar";
import { Paper } from "@mui/material";

export default function Home() {
  return (
    <>
      <Paper>
        <MenuBar />
        <HomePage />
      </Paper>
    </>
  );
}
