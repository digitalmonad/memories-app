import React, { FC } from "react";

import { Box } from "rebass/styled-components";

export const Container: FC = ({ children }) => (
  <Box
    sx={{
      maxWidth: 1080,
      mx: "auto",
      px: 3,
    }}
  >
    {children}
  </Box>
);
