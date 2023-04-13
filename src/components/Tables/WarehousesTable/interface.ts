export interface IWarehousesTableItem {
  address: string;
  schedule: string;
  contacts: string;
  availability: string;
  price: string;
}

export interface IWarehousesTableData {
  data: IWarehousesTableItem[];
}
