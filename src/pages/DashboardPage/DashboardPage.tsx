import { DaysWrapper, EntryWrapper } from "./DashboardPage.styled";
import { Flex, Text } from "rebass/styled-components";

import React from "react";

export const DashboardPage = () => (
  <Flex flexDirection={["column", "row"]} flexGrow={1}>
    <Flex height={["30%", "100%"]} width={[1, 1 / 5]}>
      <DaysWrapper width={[1]} p={3}>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
        <Text fontSize={2}>Menu Item</Text>
      </DaysWrapper>
    </Flex>
    <Flex height={["70%", "100%"]} width={[1, 4 / 5]}>
      <EntryWrapper p={3}>
        <Text fontSize={2}>Editor</Text>
      </EntryWrapper>
    </Flex>
  </Flex>
);
export default DashboardPage;
