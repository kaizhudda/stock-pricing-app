import { useCallback, createContext, useContext } from "react";
import { getStockData, Stock } from "../apis/stockPrice.api";
import useFetchData from "../hooks/useFetchData";
import { Status } from "../utils/constants";

type StockDataProviderProps = { children: React.ReactNode };

const StockDataContext = createContext<
  { status: Status; data: Stock[] } | undefined
>(undefined);

const StockDataContextProvider = ({ children }: StockDataProviderProps) => {
  const memoizedGetStockData = useCallback(async () => {
    return await getStockData();
  }, []);

  const { status, data } = useFetchData(memoizedGetStockData);
  return (
    <StockDataContext.Provider value={{ status, data }}>
      {children}
    </StockDataContext.Provider>
  );
};

const useStockData = () => {
  const context = useContext(StockDataContext);

  if (context === undefined) {
    throw new Error(
      "useStockData must be used within a StockDataContextProvider"
    );
  }
  return context;
};

export { StockDataContextProvider, useStockData };
