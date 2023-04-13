import CalculateTable from "@/components/CalculateTable";
import Tabless from "@/components/Table";
import WarehousePageTable from "@/components/WarehousePage/Table";
import WarehouseCard from "@/components/WarehousePage/Card";
import { ICoalProduct } from "@/models/IProducts";
import { IWarehouse, IWarehouseResponseById } from "@/models/IWarehouse";
import { Card, Space, Select, Layout, Input, Button } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import WarehouseCalculator from "@/components/WarehousePage/Calculator";

interface IPageProps {
  warehouse: IWarehouse;
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const warehouse: IWarehouseResponseById = await fetch(
    `${process.env.api}/api/warehouses/${id}?${process.env.apiParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.token}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.data);

  await console.log(warehouse);

  return {
    props: {
      warehouse,
    },
  };
};

const WarehousePage = ({ warehouse }: IPageProps) => {
  const router = useRouter();

  return (
    <>
      <Space
        direction="vertical"
        size={16}
        style={{ position: "relative", display: "flex", flexDirection: "row" }}
      >
        <div className="first__column">
          <WarehouseCard
            id={warehouse.id}
            title={warehouse.title}
            schedule={warehouse.schedule}
            address={warehouse.address}
            coal_products={warehouse.coal_products}
            additional_services={warehouse.additional_services}
            delivery={warehouse.delivery}
            contacts={warehouse.contacts}
          />
          <WarehousePageTable coal_products={warehouse.coal_products} />
        </div>
        <div className="second__column">
          <WarehouseCalculator
            id={warehouse.id}
            title={warehouse.title}
            schedule={warehouse.schedule}
            address={warehouse.address}
            coal_products={warehouse.coal_products}
            additional_services={warehouse.additional_services}
            delivery={warehouse.delivery}
            contacts={warehouse.contacts}
          />
        </div>
      </Space>
    </>
  );
};

export default WarehousePage;
