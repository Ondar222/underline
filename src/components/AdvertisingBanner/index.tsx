import { Button, Col, Layout, Row } from "antd";
import LastPost from "../Post/LastPost";
import CalculateBanner from "./CalculateBanner";

const AdvertisingBanner = () => {
  return (
    <div className="advertising__banner">
      <Layout>
        <Row>
          <Col span={16} className="info__calculate">
            <CalculateBanner />
          </Col>
          <Col span={7} className="coal">
            <LastPost
              title="В Туве бесплатным углем обеспечат более 320 семей"
              image="/Rectangle_9.png"
              date="5 марта 2023, 17:17"
            />
          </Col>
        </Row>
        <Row
          style={{
            flex: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {[1, 2, 3].map((item) => {
            return (
              <Col>
                <img className="" src="/Rectangle_10.png" alt="" />
              </Col>
            );
          })}
        </Row>
      </Layout>
    </div>
  );
};

export default AdvertisingBanner;
