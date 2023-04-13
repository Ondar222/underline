import AppInput from "@/components/Form/Input";
import AppSelect from "@/components/Form/Select";
import { IDeliveryOptions } from "@/models/IDelivery";
import { ICoalProduct } from "@/models/IProducts";
import { IWarehouse } from "@/models/IWarehouse";
import { Button, Card, Space, Typography } from "antd";
import { useRouter } from "next/router";

const WarehouseCalculator = (warehouse: IWarehouse) => {
  const router = useRouter();
  return (
    <div className="warehouse__calc" style={{ width: "100%" }}>
      <Typography.Title level={2} className="warehouse__calc__heading">
        Калькулятор расчета стоимости угля
      </Typography.Title>

      <Space.Compact
        block={true}
        direction="vertical"
        size="large"
      >
        <AppInput placeholder="3" label="Необходимое количество в тоннах" />
        <AppSelect
          label="Сорт угля"
          placeholder={warehouse.coal_products[0].name}
          value={warehouse.coal_products[0].name}
          options={warehouse.coal_products.map(
            (item: ICoalProduct, index: number) => ({
              key: index,
              value: item.price,
              label: item.name,
            })
          )}
        />
        <AppSelect
          placeholder="Доставка"
          label="Способ получения"
          options={warehouse.delivery.map(
            (item: IDeliveryOptions, index: number) => ({
              key: index,
              value: item.price,
              label: item.locality.locality,
            })
          )}
        />
      </Space.Compact>

      <div className="filter__buttons">
        <Button className="button primary" onClick={() => { }}>
          Очистить
        </Button>
        <Button
          className="button red"
          onClick={() => {
            router.push("/calcresult");
          }}
        >
          Рассчитать
        </Button>
      </div>
      <CalculateNotes />
    </div>
  );
};

export default WarehouseCalculator;

const CalculateNotes = () => {
  return (
    <div className="warehouse__calc__notes">
      <ul>
        <li>Все цены указаны в российских рублях</li>
        <li>
          Цены на уголь указаны в рассчете на одну тонну(1000 килограммов)
        </li>
        <li>
          Стоимость доставки зависит от количества угля и расстоянния до адреса
          заказчика
        </li>
        <li>
          Формаула рассчета стоимости доставки может отличаться в зависимости от
          выбранного склада
        </li>
        <li>
          Центр управления регионом не несет ответственности за недостоверность
          данных и информации, предоставленной складом
        </li>
      </ul>
    </div>
  );
};
