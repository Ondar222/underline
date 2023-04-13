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
}: any) => {
  return (
    <label>
      <Typography.Paragraph>{label}</Typography.Paragraph>
      <Select
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        options={options}
      ></Select>
    </label>
  );
};

export default AppSelect;
