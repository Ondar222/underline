import Project from "@/components/Project";
import { Layout } from "antd";
import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const About = ({ children }: IChildren) => {
  return (
    <Layout>
      <Project />
    </Layout>
  );
};

export default About;
