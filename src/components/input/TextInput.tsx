import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import { ChangeEvent } from "react";
import { useStyle } from "./useStyle";

interface TextInputProps {
  placeholder: string;
  fontWeight?: number;
  fontSize?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    border: "0px",
  },
}));

const TextInput = ({
  placeholder,
  fontSize,
  fontWeight,
  onClick,
  onChange,
}: TextInputProps) => {
  const style = useStyle;
  const inputStyle = {
    fontWeight: fontWeight || "bold",
    fontSize: fontSize || "16px",
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

  return (
    <TitleInput
      type="text"
      placeholder={placeholder}
      sx={{ ...style.textInput, ...inputStyle }}
      onClick={handleClick}
      onChange={handleChange}
      multiline
    />
  );
};

export default TextInput;
