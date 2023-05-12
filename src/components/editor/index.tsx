import AddIcon from "@mui/icons-material/Add";
import { Box, Divider, IconButton } from "@mui/material";
import { RangeStatic, Sources } from "quill";
import { useRef, useState } from "react";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import TextInput from "../input/TextInput";
import MenuComponent from "../menu/MenuComponent";
import RichTextEditor from "./richTextEditor";
import { useStyle } from "./useStyle";

function Editor() {
  const style = useStyle;
  const [value, setValue] = useState<string>("");
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [textInputClicked, setTextInputClicked] = useState<boolean>(false);
  const [selectionRange, setSelectionRange] = useState<RangeStatic | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const quillRef = useRef<ReactQuill>(null);

  const handleTextInputClick = () => {
    setTextInputClicked(true);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectionChange = (
    selection: RangeStatic | null,
    source: Sources,
    editor: UnprivilegedEditor
  ) => {
    setSelectionRange(selection);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const insertEmbed = (type: string, value: string) => {
    const quillInstance = quillRef.current?.getEditor();
    if (!quillInstance) return;

    const index = selectionRange
      ? selectionRange.index
      : quillInstance.getLength() || 0;
    quillInstance.insertEmbed(index, type, value);
  };

  const renderAddButton = () => {
    return (
      <>
        <IconButton color="primary" onClick={handleButtonClick} sx={style.plus}>
          <AddIcon />
        </IconButton>
        <MenuComponent
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          insertEmbed={insertEmbed}
          insertVidoEmbed={insertEmbed}
        />
      </>
    );
  };

  return (
    <>
      <Box sx={style.editor}>
        <Divider sx={style.divider} />
        <Box sx={style.window}>
          <TextInput
            placeholder="Add post title"
            fontWeight={500}
            fontSize="25px"
            onClick={handleTextInputClick}
          />
          <RichTextEditor
            value={value}
            setValue={setValue}
            setShowAdd={setShowAdd}
            hide={showAdd}
            quillRef={quillRef}
            handleSelectionChange={handleSelectionChange}
          />
          {showAdd && renderAddButton()}
        </Box>

        <Box sx={style.footer}>0/1000 words</Box>
      </Box>
    </>
  );
}

export default Editor;
