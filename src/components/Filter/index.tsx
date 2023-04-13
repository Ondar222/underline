import { Button, Layout, Select, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import warehousesSlice from "@/store/warehouses.slice";
import { observer } from "mobx-react-lite";
import AppSelect from "../Form/Select";

const Filter = observer(() => {
  const [grade, setGrade] = useState<string>("");

  useEffect(() => {
    warehousesSlice.getRegions();
    warehousesSlice.setFilteredWarehouses(
      warehousesSlice.region,
      warehousesSlice.locality,
      grade
    );
    warehousesSlice.getGrade(warehousesSlice.region, warehousesSlice.locality);
    warehousesSlice.setSelectedRegionWarehouses(warehousesSlice.region);
  }, []);

  useEffect(() => {
    warehousesSlice.setSelectedRegionLocalities(warehousesSlice.region);
    warehousesSlice.setLocality(warehousesSlice.selectedRegionLocalities[0]);
    // warehousesSlice.setSelectedRegionWarehouses(warehousesSlice.region)
  }, [warehousesSlice.region]);

  useEffect(() => {
    if (warehousesSlice.selectedRegionWarehouses != undefined) {
      setGrade(
        warehousesSlice.selectedRegionWarehouses[0]?.coal_products[0]?.name
      );
    }
  }, [warehousesSlice.locality]);

  return (
    <div className="filter">
      <Space.Compact direction="vertical" size="large" block={true}>
        <Typography.Title level={2}>Поиск</Typography.Title>
        <Space direction="vertical" size={16}>
          <AppSelect
            label="Выберите район"
            defaultValue={warehousesSlice.region}
            value={warehousesSlice.region}
            options={warehousesSlice.regions.map(
              (item: string, index: number) => ({
                key: index,
                value: item,
                label: item,
              })
            )}
            onChange={(e: string) => {
              warehousesSlice.setRegion(e);
            }}
          />
          <AppSelect
            label="Выберите населенный пункт"
            defaultValue={warehousesSlice.region}
            value={warehousesSlice.locality || "Кызыл"}
            options={warehousesSlice.selectedRegionLocalities.map(
              (item: any, _index: number) => ({
                key: item,
                value: item,
                label: item,
              })
            )}
            onChange={(e: string) => {
              warehousesSlice.setLocality(e);
            }}
          />

          {warehousesSlice.region != undefined &&
            warehousesSlice.locality != undefined && (
              <AppSelect
                label="Сорт угля"
                value={grade}
                options={warehousesSlice.grades.map(
                  (item: any, _index: number) => ({
                    key: item,
                    value: item,
                    label: item,
                  })
                )}
                onChange={(e: string) => {
                  setGrade(e);
                }}
              />
            )}

        <div className="filter__buttons">
          <Button className="">Очистить</Button>
          <Button
            className="button" style={{bottom: "20px"}}
            onClick={() => {
              if (warehousesSlice.region && warehousesSlice.locality && grade) {
                warehousesSlice.setFilteredWarehouses(
                  warehousesSlice.region,
                  warehousesSlice.locality,
                  grade
                );
              }
            }}
          >
            Поиск
          </Button>
        </div>
      </Space>
    </Layout>
  );
});

export default Filter;
