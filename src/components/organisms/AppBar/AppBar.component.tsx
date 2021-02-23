import { Box, Heading } from "rebass/styled-components";
import React, { FC } from "react";

import { Root } from "./AppBar.styled";

type AppBarPropsT = {
  appName: string;
};

export const AppBar: FC<AppBarPropsT> = ({ appName }) => (
  <Root px={3} py={2}>
    <Heading fontWeight={"bold"} color={"gray500"}>
      {appName}
    </Heading>
  </Root>
);
