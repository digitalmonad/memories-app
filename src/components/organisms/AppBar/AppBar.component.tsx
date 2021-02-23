import React, { FC } from "react";

import { Box } from "rebass/styled-components";

type AppBarPropsT = {
  appName: string;
};

export const AppBar: FC<AppBarPropsT> = ({ appName }) => (
  <Box backgroundColor={"darkBackground"} color={"white"}>
    {appName}
  </Box>
);
