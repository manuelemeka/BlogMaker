import React, { ChangeEvent } from 'react';
import './Input.css'

interface TextInputProps {
  placeholder: string;
  fontWeight?: number;
  fontSize?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ placeholder, fontSize, fontWeight, onClick, onChange }: TextInputProps) => {
    const inputStyle = {
        fontWeight: fontWeight || 'bold',
        fontSize: fontSize || '16px',
    };

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };
    
    return <input type="text" placeholder={placeholder} className="textInput" style={inputStyle} onClick={handleClick} onChange={handleChange}/>;
};

export default TextInput;
