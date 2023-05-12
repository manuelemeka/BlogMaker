import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import * as React from "react";
import { MenuItemProps } from "../menu/MenuComponent";
import { useStyle } from "./useStyle";

interface SocialMediaEmbedProps {
  value: MenuItemProps;
  openModal: (value: MenuItemProps) => void;
}

const SocialMediaEmbed: React.FC<SocialMediaEmbedProps> = ({
  value,
  openModal,
}) => {
  const style = useStyle;

  const modalBody = (
    <Box sx={style.modal}>
      <Typography variant="h6" component="h2">
        Embed
      </Typography>
      <Box sx={{ mt: 2 }}>
        <FormControl fullWidth>
          <Typography sx={{ mb: 1, fontSize: 12 }}>
            SOCIAL MEDIA PLATFORM
          </Typography>
          <Select
            value={"Facebook"}
            sx={style.selectColor}
            size="small"
          >
            <MenuItem value={"Facebook"}>Facebook</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <Typography sx={{ mb: 1, fontSize: 12 }}>URL</Typography>
          <OutlinedInput
            type="text"
            size="small"
            sx={style.selectColor}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <Typography sx={{ mb: 1, fontSize: 12 }}>CODE</Typography>
          <OutlinedInput
            type="text"
            size="small"
            sx={style.selectColor}
          />
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 12, mr: 1 }}>Disable caption</Typography>
          <Switch color="success" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 2, }}>
        <Button
          onClick={() => {
            openModal(value);
          }}
          variant="contained"
          color="success"
          sx={{ textTransform: "none" }}
        >
          Embed
        </Button>
        <Button
          onClick={() => {
            openModal(value);
          }}
          sx={{ ml: 2, textTransform: "none" }}
          variant="outlined"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Modal
        open={value.status}
        onClose={() => {
          openModal(value);
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default SocialMediaEmbed;
