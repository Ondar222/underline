import { Table } from 'antd';

const columns = [
  {
    title: '',
    dataIndex: 'name',
  },
 
  {
    title: '',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'Сорт угля',
  
    address: 'Балахтинский',
  },
  {
    key: '2',
    name: 'Стоимость за 1 тонну ',
 
    address: '2 714 ₽',
  },
  {
    key: '3',
    name: 'Необходимое количество угля  ',
   
    address: '3',
  },
  {
    key: '4',
    name: 'Доставка  ',
   
    address: '500 ₽',
  },
  {
    key: '5',
    name: 'ИТОГО',
  
    address: '8 642 ₽',
  },
];

const CalculateTable = () => {
  return <>
    <Table columns={columns} dataSource={data} pagination={false} size="middle"/>
  </>
};

export default CalculateTable;