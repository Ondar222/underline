import { ICoalProduct, ICoalProducts } from "@/models/IProducts";
import { Table } from "antd";

const WarehousePageTable = ({ coal_products }: ICoalProducts) => {
  return (
    <Table dataSource={coal_products} pagination={false}>
      <Table.Column title="Сорт угля" dataIndex="name" />
      <Table.Column
        title="В наличии"
        dataIndex="availability"
        render={({ availability }: ICoalProduct) => {
          return <p>{availability ? "В наличии" : "Отсутствует"}</p>;
        }}
      />
      <Table.Column title="Цена" dataIndex="price" />
    </Table>
  );
};

export default WarehousePageTable;
