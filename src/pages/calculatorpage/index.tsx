import { Card, Layout, Space } from "antd";
import CalculateTable from "@/components/CalculateTable";
import MainLayout from "@/layouts";

const CalculatorPage = () => {
  return (
    <MainLayout>
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
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 15 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 1.5C4.20122 1.5 1.5 4.20478 1.5 7.54902C1.5 8.56026 1.83256 9.73882 2.41479 11.0003C2.99137 12.2496 3.77514 13.5 4.58772 14.6325C5.71656 16.2059 6.86398 17.5011 7.5 18.1864C8.13602 17.5011 9.28344 16.2059 10.4123 14.6325C11.2249 13.5 12.0086 12.2496 12.5852 11.0003C13.1674 9.73882 13.5 8.56026 13.5 7.54902C13.5 4.20478 10.7988 1.5 7.5 1.5ZM6.93095 19.7633C6.78797 19.6188 5.06123 17.8656 3.36896 15.507C2.5228 14.3276 1.68236 12.9929 1.05285 11.6289C0.424191 10.2668 0 8.86306 0 7.54902C0 3.38558 3.3636 0 7.5 0C11.6364 0 15 3.38558 15 7.54902C15 8.86306 14.5758 10.2668 13.9472 11.6289C13.3176 12.9929 12.4772 14.3276 11.631 15.507C9.93877 17.8656 8.21203 19.6188 8.06905 19.7633L8.06805 19.7644C7.91113 19.9207 7.70555 20 7.5 20C7.29445 20 7.08888 19.9207 6.93195 19.7644L6.93095 19.7633Z"
                      fill="#C90000"
                    />
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M7.50403 5C6.12693 5 5.00403 6.1229 5.00403 7.5C5.00403 8.8771 6.12693 10 7.50403 10C8.88113 10 10.004 8.8771 10.004 7.5C10.004 6.1229 8.88113 5 7.50403 5ZM3.50403 7.5C3.50403 5.29447 5.2985 3.5 7.50403 3.5C9.70955 3.5 11.504 5.29447 11.504 7.5C11.504 9.70553 9.70955 11.5 7.50403 11.5C5.2985 11.5 3.50403 9.70553 3.50403 7.5Z"
                      fill="#C90000"
                    />
                  </svg>
                  <p>Каа-Хемский район</p>
                </div>
                <div className="table__p">
                  <CalculateTable />
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
    </MainLayout>
  );
};

export default CalculatorPage;
