import { BubbleChart, LocalSee, Videocam } from "@mui/icons-material";
import {
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PhotoUpload from "../modals/PhotoUpload";
import SocialMediaEmbed from "../modals/SocialMediaEmbed";
import YoutubeUpload from "../modals/YoutubeUpload";
import StyledMenuItem from "./Menu";
import { useStyle } from "./MenuStyle";

interface MenuComponentProps {
  anchorEl: null | HTMLElement;
  onClose: () => void;
  insertEmbed: (type: string, value: string) => void;
  insertVidoEmbed: (type: string, value: string) => void;
}

const menuItems = [
  {
    id: "picture",
    icon: <LocalSee />,
    primaryText: "Picture",
    secondaryText: "jpg, png",
  },
  {
    id: "video",
    icon: <Videocam />,
    primaryText: "Video",
    secondaryText: "JM player, Youtube, Vimeo",
  },
  {
    id: "social",
    icon: <BubbleChart />,
    primaryText: "Social",
    secondaryText: "Instagram, Twitter, Tiktok, Snapchat, Facebook",
  },
];

export interface MenuItemProps {
  id: string;
  status: boolean;
}

function MenuComponent({
  anchorEl,
  onClose,
  insertEmbed,
  insertVidoEmbed,
}: MenuComponentProps) {
  const style = useStyle;
  const [menuItemState, setMenuItemState] = useState<MenuItemProps[]>(
    menuItems.map((item) => {
      return { id: item.id, status: false };
    })
  );

  const handleMenuItemClick = (id: string) => {
    setMenuItemState((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
    onClose();
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        sx={style.menuPaper}
      >
        <Typography variant="subtitle1" sx={style.menuHeader}>
          EMBEDS
        </Typography>
        {menuItems.map((item, index) => (
          <StyledMenuItem
            key={index}
            onClick={() => handleMenuItemClick(item.id)}
          >
            <ListItemIcon sx={style.list}>{item.icon}</ListItemIcon>
            <ListItemText
              sx={style.menuPrimary}
              primary={
                <Typography variant="subtitle1" sx={style.menuText}>
                  {item.primaryText}
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={style.menuSubtextSmall}>
                  {item.secondaryText}
                </Typography>
              }
            />
          </StyledMenuItem>
        ))}
      </Menu>
      {menuItemState.map((item, index) => (
        <Box key={index}>
          {{
            picture: (
              <PhotoUpload
                value={item}
                openModal={() => {
                  handleMenuItemClick(item.id);
                }}
                insertEmbed={insertEmbed}
              />
            ),
            video: (
              <YoutubeUpload
                value={item}
                openModal={() => {
                  handleMenuItemClick(item.id);
                }}
                insertEmbed={insertVidoEmbed}
              />
            ),
            social: (
              <SocialMediaEmbed
                value={item}
                openModal={() => {
                  handleMenuItemClick(item.id);
                }}
              />
            ),
          }[item.id] || (
            <div className="main-wrapper">
              {" "}
              <h1>Default</h1>
            </div>
          )}
        </Box>
      ))}
    </>
  );
}

export default MenuComponent;
