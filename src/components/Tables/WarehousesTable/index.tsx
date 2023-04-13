import { IAddress } from "@/models/IAddress";
import { IEmail, IPhone } from "@/models/IContacts";
import { ICoalProduct } from "@/models/IProducts";
import { ISchedule } from "@/models/ISchedule";
import { Table } from "antd";

const WarehousesTable = (params: any) => {
  return (
    <div className="warehouses__table">
      <Table
        dataSource={params.warehouses}
        pagination={false}
        size="large"
        bordered={true}
      >
        <Table.Column
          title="Адрес"
          dataIndex="address"
          width={500}
          render={(address: IAddress) => {
            return (
              <p>
                {String().concat(
                  address?.region?.type + " ",
                  address?.region?.name + ", ",
                  address?.locality?.type + " ",
                  address?.locality?.name + ", ",
                  address?.street?.type + " ",
                  address?.street?.name + ", ",
                  "дом " + address?.street?.number
                )}
              </p>
            );
          }}
        />
        <Table.Column
          title="Режим работы"
          dataIndex="schedule"
          render={(item: ISchedule) => {
            return <p>{item.short_text}</p>;
          }}
        />
        <Table.Column
          title="Контакты"
          dataIndex="contacts"
          render={(item: { emails: IEmail[]; phones: IPhone[] }) => {
            return item.phones[0].phone;
          }}
        />
        <Table.Column
          title="Наличие"
          dataIndex="coal_products"
          render={(coal_products: ICoalProduct[]) => {
            if (coal_products[0].availability) {
              return <p>Есть в наличии</p>;
            } else {
              return <p>Нет в наличии</p>;
            }
          }}
        />
        <Table.Column
          title="Стоимость"
          dataIndex="coal_products"
          render={(coal_products: ICoalProduct[]) => {
            return <p>{coal_products[0].price}</p>;
          }}
        />
      </Table>
    </div>
  );
};

export default WarehousesTable;
