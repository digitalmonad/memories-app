import { Box } from "rebass/styled-components";
import styled from "styled-components";

export const DaysWrapper = styled(Box)`
  overflow: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    border: none;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const EntryWrapper = styled(Box)``;
