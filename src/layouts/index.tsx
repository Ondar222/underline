
import Layout from "antd/lib/layout/layout";
import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const MainLayout = ({ children }: IChildren) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default MainLayout;
