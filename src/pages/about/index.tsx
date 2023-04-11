import Proect from "@/components/Proect";
import MainLayout from "@/layouts";
// import { Col, Row, Space } from "antd";
import { observer } from "mobx-react-lite";
import MainHeader from "@/components/Header";
import PageFooter from "@/components/Footer";
import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const About = ({ children }: IChildren) => {
  return (
    <>
      <MainHeader />
      <Proect />
      <PageFooter />
    </>
  );
};

export default About;
