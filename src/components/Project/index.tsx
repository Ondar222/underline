import { ConfigProvider, Image, Layout, Space, Typography } from "antd";

const Project = () => {
  return (
    <Layout className="block__bg">
      <Space direction="vertical" size={50}>
        <Space size={34} className="container__proect">
          <Image src="/Rectangle_15.png" />
          <ConfigProvider>
            <Typography.Text>
              Центр управления регионом Республики Тыва (далее-ЦУР РТ) сообщает,
              что одной из главных общественно-значимых тем на территории
              республики остается тема доступности каменного угля. Безусловно,
              это связано с началом отопительного сезона, однако основные
              причины возросшей обращаемости - рост цены на уголь, а также
              отсутствие доступной и актуальной информации в открытых источниках
              о пунктах реализации (топливных складах), наличии в них угля и
              объемах, фактических ценах, стоимости доставки, дополнительных
              услугах.
            </Typography.Text>
          </ConfigProvider>
        </Space>
        <Typography.Paragraph>Мы в социальных сетях:</Typography.Paragraph>
        <Space.Compact direction="horizontal">
          <Image src="/tg_logo.svg" />
          <Image src="/vk_logo.svg" />
        </Space.Compact>
      </Space>
    </Layout>
  );
};

export default Project;
