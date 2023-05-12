export interface FormatData {
  className: string;
  options?: string[];
  value?: string;
}

const formats: FormatData[][] = [
  [
    {
      className: "ql-size",
      options: ["small", "large", "huge"],
    },
  ],
  [{ className: "ql-link" }, { className: "ql-image" }],
  [{ className: "ql-bold" }, { className: "ql-italic" }],

  [
    {
      className: "ql-list",
      value: "ordered",
    },
    {
      className: "ql-list",
      value: "bullet",
    },
    {
      className: "ql-indent",
      value: "-1",
    },
    {
      className: "ql-indent",
      value: "+1",
    },
  ],
  [
    {
      className: "ql-align",
      options: ["right", "center", "justify"],
    },
  ],
];

export default formats;
