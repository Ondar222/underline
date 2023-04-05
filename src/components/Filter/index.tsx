import { Button, Layout, Select, Space } from "antd"
import { useEffect, useState } from "react"
import warehousesSlice from "@/store/warehouses.slice"
import { observer } from "mobx-react-lite"

const Filter = observer(() => {
  const [grade, setGrade] = useState<string>('')

  useEffect(() => {
    warehousesSlice.getRegions()
    warehousesSlice.setFilteredWarehouses(warehousesSlice.region, warehousesSlice.locality, grade)
    warehousesSlice.getGrade(warehousesSlice.region, warehousesSlice.locality)
    warehousesSlice.setSelectedRegionWarehouses(warehousesSlice.region)
  }, [])

  useEffect(() => {
    warehousesSlice.setSelectedRegionLocalities(warehousesSlice.region)
    warehousesSlice.setLocality(warehousesSlice.selectedRegionLocalities[0])
    // warehousesSlice.setSelectedRegionWarehouses(warehousesSlice.region)
  }, [warehousesSlice.region])

  useEffect(() => {
    if (warehousesSlice.selectedRegionWarehouses != undefined) {
      setGrade(warehousesSlice.selectedRegionWarehouses[0]?.coal_products[0]?.name)
    }
  }, [warehousesSlice.locality])

  return (<Layout>
    <Space direction="vertical" size="large">
      <Select
        size="large"
        defaultValue={warehousesSlice.region}
        value={warehousesSlice.region}
        options={warehousesSlice.regions.map((item: string, index: number) => ({ key: index, value: item, label: item }))}
        onSelect={(e) => {
        }}
        onChange={(e: string) => {
          warehousesSlice.setRegion(e)
        }}
      />

      <Select
        size="large"
        value={warehousesSlice.locality || "Кызыл"}
        options={warehousesSlice.selectedRegionLocalities.map((item: any, _index: number) => ({ key: item, value: item, label: item }))}
        onChange={(e: string) => {
          warehousesSlice.setLocality(e)
        }}
      />

      {
        warehousesSlice.region != undefined && warehousesSlice.locality != undefined && <Select
          size="large"
          value={grade}
          options={warehousesSlice.grades.map((item: any, _index: number) => ({ key: item, value: item, label: item }))}
          onChange={(e: string) => {
            setGrade(e)
          }}
        />
      }

      <div className="filter__buttons">
        <Button>Очистить</Button>
        <Button onClick={() => {
          if (warehousesSlice.region && warehousesSlice.locality && grade) {
            warehousesSlice.setFilteredWarehouses(warehousesSlice.region, warehousesSlice.locality, grade)
          }
        }}>Поиск</Button>
      </div>
    </Space>


  </Layout>
  )
})

export default Filter