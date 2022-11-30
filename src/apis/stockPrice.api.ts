import api from "./reckon.api";

export const stockPriceEndpoint = "stock-pricing";

export type Stock = {
  code: string;
  price: string;
};

export type GetStockResponse = {
  data: Stock[];
};

export const getStockData = async () => {
  const { data } = await api.get<GetStockResponse>(stockPriceEndpoint);
  return data;
};
