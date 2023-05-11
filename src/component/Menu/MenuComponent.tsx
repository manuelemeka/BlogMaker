import React from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { LocalSee, Videocam, BubbleChart } from '@mui/icons-material';
import './MenuStyle.css';

interface MenuComponentProps {
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

function MenuComponent({ anchorEl, onClose }: MenuComponentProps) {
  const menuItems = [
    {
      icon: <LocalSee />,
      primaryText: 'Picture',
      secondaryText: 'jpg, png',
    },
    {
      icon: <Videocam />,
      primaryText: 'Video',
      secondaryText: 'JM player, Youtube, Vimeo',
    },
    {
      icon: <BubbleChart />,
      primaryText: 'Social',
      secondaryText: 'Instagram, Twitter, Tiktok, Snapchat, Facebook',
    },
  ];

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      classes={{
        paper: 'menu-paper',
      }}
    >
      <Typography variant="subtitle1" className="menu-header">
        EMBEDS
      </Typography>
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={onClose}>
          <ListItemIcon className="list">
            {item.icon}
          </ListItemIcon>
          <ListItemText className="menu-primary"
            primary={
              <Typography variant="subtitle1" className="menu-text">
                {item.primaryText}
              </Typography>
            }
            secondary={
              <Typography variant="body2" className="menu-subtext-small">
                {item.secondaryText}
              </Typography>
            }
          />
        </MenuItem>
      ))}
    </Menu>
  );
}

export default MenuComponent;
