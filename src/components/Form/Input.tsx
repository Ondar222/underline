import { Input } from "antd";

const AppInput = ({ value, placeholder, label }: any) => {
  return (
    <label>
      <h2 className="paragraph__calculate__name">{label}</h2>
      <Input placeholder={placeholder} value={value} />
    </label>
  );
};

export default AppInput;
