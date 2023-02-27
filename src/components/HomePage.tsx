import { Paper, Typography, Box, Divider } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
  return (
    <Paper>
      <Box display="flex" justifyContent={"center"}>
        <Box padding={3} width="50vw">
          <Box>
            <Typography>
              Welcome to The Platform Guy, my name is Mark. I have been building
              swim platforms for 15 years, focusing on Correct Craft Boats. I am
              expanding my business to other ski boats. All of my platforms are
              built using Jatoba, West systems expoxy, and stainless steel
              screws. Jatoba is a cost-effective alternative to Teak.
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h6">Jatoba Wood</Typography>
            <Typography>
              Jatoba is native to South America. It works very well for swim
              platforms due to its ability to resist rot. Jatoba&apos;s color
              and grain is very similar to Teak and is often mistaken for Teak.
              The color is an attractive burgundy, deep red, or orange tone.
              Jatoba is more dense than Teak and often outlasts teak when used
              for the ski boat swim platforms. Jatoba is also used because it is
              more cost effective.
            </Typography>
            <Box display="flex" flexDirection={"row"}>
              <Box padding={2}>
                <Image
                  src="/_MG_9935Top.png"
                  alt="Platform"
                  width="511"
                  height="220"
                />
              </Box>
              <Box padding={2}>
                <Image
                  src="/_MG_9944Grain.png"
                  alt="Platform"
                  width="255"
                  height="170"
                />
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h6">West System® Epoxy</Typography>
            <Typography>
              The platforms are fabricated using West System® Epoxy and
              stainless steel screws. West systems is designed by Gougeon
              Brothers Inc specifically for wooden boat building.
            </Typography>
            <Image
              src="/_MG_9949chem.png"
              alt="Platform"
              width="395"
              height="511"
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
