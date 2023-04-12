import { Footer } from "antd/es/layout/layout";
import Layout from "antd/es/layout/layout";

const PageFooter = () => {
  return (
    <footer className="footer">
      <Layout>
        <div className="footer__container">
          <div className="Regional__Management__Center">
            <img src="/RMC_Tuva_logo_белый_1.png" alt="" />
          </div>
          <div className="first__info__paragraph">
            <p>
              Разработано при поддержке Центра управления регионом Республики
              Тыва
            </p>
          </div>
          <div className="second__info__paragraph">
            <p>
              Сайт разработан
            </p>
              <a className="RT_tcit" href="#">КП РТ "ЦИТ РТ"</a>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default PageFooter;
