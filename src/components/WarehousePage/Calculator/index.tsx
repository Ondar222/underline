import AppInput from "@/components/Form/Input";
import AppSelect from "@/components/Form/Select";
import { IDeliveryOptions } from "@/models/IDelivery";
import { ICoalProduct } from "@/models/IProducts";
import { IWarehouse } from "@/models/IWarehouse";
import { Button, Card, Typography } from "antd";
import { useRouter } from "next/router";

const WarehouseCalculator = (warehouse: IWarehouse) => {
  const router = useRouter();
  return (
    <Card className="third__card" style={{ width: "100%" }}>
      <Typography.Title level={2}>
        Калькулятор расчета стоимости угля
      </Typography.Title>

      <div className="button__container__card">
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
      </div>
      <div className="filter__buttons">
        <Button className="button button__clear" onClick={() => {}}>
          Очистить
        </Button>
        <Button
          className="button button__calculate"
          onClick={() => {
            router.push("/calcresult");
          }}
        >
          Рассчитать
        </Button>
      </div>
      <CalculateNotes />
    </Card>
  );
};

export default WarehouseCalculator;

const CalculateNotes = () => {
  return (
    <div className="footer__container__paragraph">
      <ul className="ul__footer__paragraph">
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
