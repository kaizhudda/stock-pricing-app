import Dashboard from "../views/Dashboard";
import { Header, Container } from "./App.styles";
function App() {
  return (
    <Container>
      <Header>
        <h2>Tech Test</h2>
      </Header>
      <Dashboard />
    </Container>
  );
}

export default App;
