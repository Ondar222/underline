import warehousesSlice from "@/store/warehouses.slice"
import { Layout } from "antd"
import { observer } from "mobx-react-lite"

const News = observer(() => {
  return <Layout>{JSON.stringify(warehousesSlice.warehouses)}</Layout>
})

export default News