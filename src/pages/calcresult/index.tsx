import { Card, Layout, Space } from "antd";
import CalculateTable from "@/components/CalculateTable";
import LastPost from "@/components/Post/LastPost";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ICalculateTable } from "@/components/CalculateTable/interface";

const CalculatorPage = observer(() => {
  const data = [
    {
      key: "1",
      name: "Сорт угля",
      address: "Балахтинский",
    },
    {
      key: "2",
      name: "Стоимость за 1 тонну ",
      address: "2 714 ₽",
    },
    {
      key: "3",
      name: "Необходимое количество угля  ",

      address: "3",
    },
    {
      key: "4",
      name: "Доставка  ",

      address: "500 ₽",
    },
    {
      key: "5",
      name: "ИТОГО",

      address: "8 642 ₽",
    },
  ];
  useEffect(() => {}, []);
  return (
    <Layout>
      <Space
        direction="vertical"
        size={16}
        style={{ position: "relative", display: "flex", flexDirection: "row" }}
      >
        <div className="first__column__table">
          <Card className="first__card__table">
            <div className="container__calculatorpage">
              <div className="title__calculatorpage">
                <h1 className="heading__calculatorpage">Ваш расчет</h1>
              </div>
              <div className="container__first__line__table">
                <div className="first__line__table">
                  <img src="/location_icon.svg" />
                  <p>Каа-Хемский район</p>
                </div>
                <div className="table__p">
                  <CalculateTable data={data} />
                </div>
              </div>
            </div>
          </Card>

          <div className="button__container__cacl__table">
            <button className="button__calculate__table">
              Найти угольный склад в моем районе
            </button>
            <button className="button__clear__table">Повторить</button>
          </div>
        </div>

        <LastPost
          title="В Туве бесплатным углем обеспечат более 3200 семей"
          image="/Rectangle 16.png"
          date="5 марта 2023, 17:17"
        />
      </Space>
    </Layout>
  );
});

export default CalculatorPage;
