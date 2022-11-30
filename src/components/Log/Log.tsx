import { useStockData } from "../../contexts/StockDataContext";

export default function Log() {
  const { data } = useStockData();

  return (
    <div>
      Log
      <div>
        {data &&
          data.map((stock) => {
            return <div>{stock.price} </div>;
          })}
      </div>
    </div>
  );
}
