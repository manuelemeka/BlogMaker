import './Input.css'

interface TextInputProps {
  placeholder: string;
}

const TextInput = ({ placeholder }: TextInputProps) => {
  return <input type="text" placeholder={placeholder} className="textInput" />;
};

export default TextInput;
