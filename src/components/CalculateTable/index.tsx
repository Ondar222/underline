import { ICoalProduct, ICoalProducts } from "@/models/IProducts";
import { Col, Row, Table } from "antd";
import { table } from "console";
import { useEffect, useState } from "react";
import { ICalculateTable } from "./interface";

const columns = [
  {
    title: "Сорт угля",
    dataIndex: "name",
  },
  {
    title: "Наличие",
    dataIndex: "availability",
  },
  {
    title: "Цена за 1 т (рублей)",
    dataIndex: "price",
  },
];

const CalculateTable = (data: any) => {
  const [tableData, setTableData] = useState<any>();

  useEffect(() => {
    let arr: any = [];
    data.coal_products.forEach((item: ICoalProduct) => {
      let avail = item.availability ? "В наличии" : "отсутствует";
      let obj = {
        name: item.name,
        availability: avail,
        price: item.price,
      };
      arr.push(obj);
    });
    setTableData(arr);
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      size="middle"
    />
  );
};

export default CalculateTable;
