import { Box, Flex, Text } from "rebass/styled-components";

import React from "react";
import styled from "styled-components";

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

const DaysWrapper = styled(Box)`
  overflow: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    border: none;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const EntryWrapper = styled(Box)``;
