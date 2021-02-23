import { Box, Flex } from "rebass/styled-components";

import React from "react";

export const DashboardPage = () => (
  <Flex flexDirection={"row"} flexGrow={1}>
    <Flex flex={"xl"} backgroundColor='red' flexGrow={1}>
      asd
    </Flex>
    <Flex flex={"xl"} backgroundColor='blue'>
      asd
    </Flex>
  </Flex>
);
export default DashboardPage;
