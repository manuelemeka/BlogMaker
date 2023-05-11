import React from "react";
import formats, { FormatData } from "./ToolbarOptions";

interface CustomToolbarProps {
  hide: boolean;
}

const renderOptions = (formatData: FormatData, index: number) => {
  const { className, options } = formatData;
  return (
    <select className={className} key={index}>
      <option></option>
      {options?.map((value, index) => (
        <option value={value} key={index}></option>
      ))}
    </select>
  );
};

const renderSingle = (formatData: FormatData, index: number) => {
  const { className, value } = formatData;
  return <button className={className} value={value} key={index}></button>;
};

const CustomToolbar: React.FC<CustomToolbarProps> = ({ hide }) => {
  return (
    <div id="toolbar" style={{ display: hide ? "block" : "none" }}>
      {formats.map((classes, index) => (
        <span className="ql-formats" key={index}>
          {classes.map((formatData, index) =>
            formatData.options
              ? renderOptions(formatData, index)
              : renderSingle(formatData, index)
          )}
        </span>
      ))}
    </div>
  );
};

export default CustomToolbar;
