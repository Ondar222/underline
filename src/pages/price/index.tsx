import { Card, Layout, Select , Space } from "antd";
import CalculateTable from "@/components/CalculateTable";

const PriceCalculator = () => {
  return (
    <Layout>
      <Space
        direction="vertical"
        size={16}
        style={{ position: "relative", display: "flex", flexDirection: "row" }}
      >
      <Card className="first__card__price" style={{ width: "100%" }}>
            <div>
              <h1 className="heading__calculator__price" style={{ width: "100%" }}>
                Калькулятор расчета стоимости угля
              </h1>
            </div>
            <div className="button__container__card">
              <p className="paragraph__price__name">Район</p>
              <Select placeholder="Каа-Хемский район">
                <Select.Option>asd</Select.Option>

              </Select>
              <p className="paragraph__price__name">Необходимое количество в тоннах</p>
              <Select placeholder="3">

                <Select.Option>asd</Select.Option>

              </Select>
              <p className="paragraph__price__name">Сорт угля</p>
              <Select placeholder="Каа-Хемский район">
                <Select.Option>asd</Select.Option>

              </Select>
              <p className="paragraph__price__name">Доставка</p>
              <Select placeholder="Нужна">
                <Select.Option>asd</Select.Option>

              </Select>


            </div>
            <div className="button__container__calc">
              <button className="button__clear">
                Очистить
              </button>
              <button className="button__calculate">
                Рассчитать
              </button>
            </div>
            <div className="footer__container__paragraph">

              <ul className="ul__footer__paragraph">
                <li>Все цены указаны в российских рублях</li>
                <li>Цены на уголь указаны в рассчете на одну тонну(1000 килограммов)</li>
                <li>Стоимость доставки зависит от количества угля и расстоянния до адреса заказчика</li>
                <li>Формаула рассчета стоимости доставки может отличаться в зависимости от выбранного склада</li>
                <li>Центр управления регионом не несет ответственности за недостоверность данных и информации, предоставленной складом</li>
              </ul>
            </div>
          </Card>
        <div className="second__column">
          <div className="calculate__image">
            <img src="/Rectangle 16.png" alt="" />
            <div className="footer__calc__block">
              <h1 className="heading__block__calc">
                В Туве бесплатным углем обеспечат более 3200 семей
              </h1>
              <p className="paragraph__block__calc">5 марта 2023, 17:17</p>
            </div>
          </div>
        </div>
      </Space>
    </Layout>
  );
};

export default PriceCalculator      ; 