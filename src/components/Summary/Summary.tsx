import { useStockData } from "../../contexts/StockDataContext";

export default function Summary() {
  const { data } = useStockData();

  return (
    <div>
      Summary
      <div>
        {data &&
          data.map((stock) => {
            return <div>{stock.price} </div>;
          })}
      </div>
    </div>
  );
}
