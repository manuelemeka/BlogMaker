import { MenuItem, styled } from "@mui/material";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#E7F1E9",
    color: "#666",
  },
}));

export default StyledMenuItem;
