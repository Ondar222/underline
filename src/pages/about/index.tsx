import Project from "@/components/Proect";
import { Layout } from "antd";
import MainLayout from "@/layouts";
import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const About = ({ children }: IChildren) => {
  return (
    <MainLayout>
      <Project />
    </MainLayout>
  );
};

export default About;
