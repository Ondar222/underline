interface ITable {
  key: string;
  name: string;
  availablity: string;
  price: number;
}

export interface ICalculateTable {
  data: ITable[];
}
