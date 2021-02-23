import { Box } from "rebass/styled-components";
import styled from "styled-components";

export const Root = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.muted} !important;
`;
