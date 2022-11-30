import { StockDataContextProvider } from "../contexts/StockDataContext";
import Dashboard from "../views/Dashboard";
import { Header, Container } from "./App.styles";
function App() {
  return (
    <StockDataContextProvider>
      <Container>
        <Header>
          <h2>Tech Test</h2>
        </Header>
        <Dashboard />
      </Container>
    </StockDataContextProvider>
  );
}

export default App;
