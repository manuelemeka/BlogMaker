import React, { useState } from 'react';
import './App.css';
import TextInput from './component/Input/TextInput';
import Toolbar from './component/Toolbar/Toolbar';
import { IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuComponent from './component/Menu/MenuComponent';

function App() {
  const [textInputClicked, setTextInputClicked] = useState(false);
  const [content, setContent] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleTextInputClick = () => {
    setTextInputClicked(true);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderToolbar = () => {
    if (textInputClicked) {
      return <Toolbar />;
    }
    return null;
  }; 

  const renderAddButton = () => {
    if (content.length > 0) {
      return (
        <>
          <IconButton
            color="primary"
            onClick={handleButtonClick}
            style={{ fontSize: 40, color: '#000' }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
          <MenuComponent anchorEl={anchorEl} onClose={handleMenuClose} />
        </>
      );
    }
    return null;
  };


  return (
    <div className="App">
      <div className="border">
        <TextInput
          placeholder="Add Post Title"
          fontWeight={800}
          fontSize="20px"
          onClick={handleTextInputClick}
        />
        {renderToolbar()}
        <TextInput
          placeholder="Add Content"
          fontWeight={200}
          fontSize="14px"
          onClick={handleTextInputClick}
          onChange={handleContentChange}
        />
        {renderAddButton()}
      </div>
    </div>
  );
}

export default App;
