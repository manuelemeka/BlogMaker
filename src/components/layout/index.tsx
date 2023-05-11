import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";
import { useStyle } from "./useStyle";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const style = useStyle;
  return (
    <Box sx={style.layout}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3} />
        <Grid item xs={12} md={6} lg={6}>
          {children}
        </Grid>
        <Grid item xs={12} md={3} lg={3} />
      </Grid>
    </Box>
  );
}

export default Layout;
