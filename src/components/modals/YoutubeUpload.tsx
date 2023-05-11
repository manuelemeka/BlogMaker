import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import * as React from "react";
import { MenuItemProps } from "../menu/MenuComponent";
import { useStyle } from "./useStyle";

interface YoutubeUploadProps {
  value: MenuItemProps;
  openModal: (value: MenuItemProps) => void;
  insertEmbed: (type: string, value: string) => void;
}

const YoutubeUpload: React.FC<YoutubeUploadProps> = ({
  value,
  openModal,
  insertEmbed,
}) => {
  const [youtubeUrl, setYoutubeUrl] = React.useState<string>("");
  const style = useStyle;

  const insertYoutubeVideo = () => {
    if (!youtubeUrl) return;

    const videoId = youtubeUrl.split("v=")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    insertEmbed("video", embedUrl);
  };

  const modalBody = (
    <Box sx={style.modal}>
      <Typography variant="h6" component="h2">
        Embed
      </Typography>
      <Box sx={{ mt: 2 }}>
        <FormControl fullWidth>
          <Typography sx={{ mb: 1, fontSize: 12 }}>Video Provider</Typography>
          <Select
            value={"Youtube"}
            sx={{ backgroundColor: "#FAFAFA" }}
            size="small"
          >
            <MenuItem value={"Youtube"}>Youtube</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <Typography sx={{ mb: 1, fontSize: 12 }}>Url</Typography>
          <OutlinedInput
            type="text"
            size="small"
            sx={{ backgroundColor: "#FAFAFA" }}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Button
          onClick={() => {
            insertYoutubeVideo();
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

export default YoutubeUpload;
