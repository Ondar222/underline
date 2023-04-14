import { Button, Card, Layout, Space, Typography, Image, Row, Col } from "antd";
import CalculateTable from "@/components/CalculateTable";
import LastPost from "@/components/Post/LastPost";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ICalculateTable } from "@/components/CalculateTable/interface";

const CalculatorPage = observer(() => {
  return (
    <>
      <Space
        direction="vertical"
        size={40}
        style={{ position: "relative", display: "flex", flexDirection: "row" }}
      >
        <div className="first__column__table">
          <Card className="first__card__table">
            <div className="container__calculatorpage">
              <Typography.Title level={2}>Ваш расчет</Typography.Title>
              <div className="container__first__line__table">
                <Space.Compact direction="horizontal" size="large" block={true}>
                  <Image src="/location_icon.svg" />
                  <Typography.Text>Каа-Хемский район</Typography.Text>
                </Space.Compact>

                <Space.Compact block={true} direction="vertical">
                  <Row className="result__row">
                    <Col span={12}>Сорт угля</Col>
                    <Col span={12}>Балахтинский</Col>
                  </Row>
                  <Row className="result__row">
                    <Col span={12}>Стоимость за 1 тонну</Col>
                    <Col span={12}>2714 ₽</Col>
                  </Row>
                  <Row className="result__row">
                    <Col span={12}>Необходимое количество</Col>
                    <Col span={12}>3</Col>
                  </Row>
                  <Row className="result__row">
                    <Col span={12}>Доставка</Col>
                    <Col span={12}>500</Col>
                  </Row>
                  <Row className="result__row">
                    <Col span={12}>Итого</Col>
                    <Col span={12}>8614 ₽</Col>
                  </Row>
                </Space.Compact>
              </div>
            </div>
          </Card>

          <Space
            direction="horizontal"
            size="large"
            className="filter__buttons"
          >
            <Button className="button red">
              Найти угольный склад в моем районе
            </Button>
            <Button className="button white">Повторить</Button>
          </Space>
        </div>

        <LastPost
          title="В Туве бесплатным углем обеспечат более 3200 семей"
          image="/Rectangle 16.png"
          date="5 марта 2023, 17:17"
          size={"large"}
        />
      </Space>
    </>
  );
});

export default CalculatorPage;
