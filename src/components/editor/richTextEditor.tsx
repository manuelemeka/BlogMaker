import { RangeStatic, Sources } from "quill";
import React, { RefObject, useState } from "react";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./richTextEditor.css";
import CustomToolbar from "./toolbar";

const modules = {
  toolbar: {
    container: "#toolbar",
  },
};

interface RichTextEditorProps {
  value: string;
  hide: boolean;
  setValue: (value: string) => void;
  setShowAdd: (value: boolean) => void;
  quillRef: RefObject<ReactQuill>;
  handleSelectionChange: (
    selection: RangeStatic | null,
    source: Sources,
    editor: UnprivilegedEditor
  ) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  hide,
  value,
  setValue,
  setShowAdd,
  quillRef,
  handleSelectionChange,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
    setShowAdd(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <div className="rich-text-editor">
      <CustomToolbar hide={hide} />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Add content..."
        formats={formats}
        modules={modules}
        onChangeSelection={handleSelectionChange}
      />
    </div>
  );
};

export default RichTextEditor;
