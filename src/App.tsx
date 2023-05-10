import React, { useState } from 'react';
import './App.css';
import TextInput from './component/Input/TextInput';
import Toolbar from './component/Toolbar/Toolbar';
import addIcon from './assets/add.svg';

function App() {
  const [textInputClicked, setTextInputClicked] = useState(false);
  const [content, setContent] = useState('');

  const handleTextInputClick = () => {
    setTextInputClicked(true);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const renderToolbar = () => {
    if (textInputClicked) {
      return <Toolbar />;
    }
    return null;
  };

  const renderAddButton = () => {
    if (content.length > 0) {
      return <img src={addIcon} className="add" alt="add"/>;
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
