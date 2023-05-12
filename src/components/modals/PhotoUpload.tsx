import { Box, Button, Modal, Typography } from "@mui/material";
import * as React from "react";
import { MenuItemProps } from "../menu/MenuComponent";
import { useStyle } from "./useStyle";

interface PhotoUploadProps {
  value: MenuItemProps;
  openModal: (value: MenuItemProps) => void;
  insertEmbed: (type: string, value: string) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  value,
  openModal,
  insertEmbed,
}) => {
  const style = useStyle;
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const handleImagePicked = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result as string;
      //insertImage(imageUrl);
      setImageUrl(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const modalBody = (
    <Box sx={style.modal}>
      <Typography variant="h6" component="h2">
        Embed
      </Typography>
      <Typography sx={{ mt: 1, fontSize: "14px", mb: 2 }}>
        Upload image.
      </Typography>
      <Box
        sx={
          imageUrl === ""
            ? style.uploadBox
            : {
                backgroundImage: `url("${imageUrl}")`,
                minHeight: "200px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundPosition: "center",
              }
        }
      >
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImagePicked}
          placeholder=""
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput">
          <Button
            variant="outlined"
            size="small"
            component="span"
            style={
              imageUrl === ""
                ? { textTransform: "none" }
                : { textTransform: "none", backgroundColor: "#fff" }
            }
          >
            {imageUrl === "" ? "Import Image from Device" : "Change Image"}
          </Button>
        </label>
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Button
          onClick={() => {
            insertEmbed("image", imageUrl);
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
            setImageUrl("");
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

export default PhotoUpload;
