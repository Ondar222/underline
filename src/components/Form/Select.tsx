import { IDelivery } from "@/models/IDelivery";
import { ICoalProduct, ICoalProducts } from "@/models/IProducts";
import { IWarehouse } from "@/models/IWarehouse";
import { Select, Typography } from "antd";

const AppSelect = ({
  placeholder,
  label,
  value,
  defaultValue,
  options,
  onChange
}: any) => {
  return (
    <label className="app-form">
      <Typography.Paragraph className="app-form__label">{label}</Typography.Paragraph>
      <Select
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        options={options}
        size="large"
        onChange={onChange}
      ></Select>
    </label>
  );
};

export default AppSelect;
