import { Table } from "antd";

const columns = [
  {
    title: "Сорт угля",
    dataIndex: "name",
  },
  {
    title: "Наличие",
    dataIndex: "age",
  },
  {
    title: "Цена за 1 т (рублей)",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "Каа-Хемский ",
    age: <p className="age__p">В наличии</p>,
    address: "2 714",
  },
  {
    key: "2",
    name: "Балахтинский ",
    age: <p className="age__pp">Отсутствует</p>,
    address: "-",
  },
  {
    key: "3",
    name: "Майрыхский",
    age: <p className="age__pp">Отсутствует</p>,
    address: "-",
  },
];

const Tabless = () => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="middle"
      />
    </>
  );
};

export default Tabless;
