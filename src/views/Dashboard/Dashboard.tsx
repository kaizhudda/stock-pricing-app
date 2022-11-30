import Summary from "../../components/Summary";
import Log from "../../components/Log";
import { FlexContainer } from "./Dashboard.styles";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <FlexContainer>
        <Log />
        <Summary />
      </FlexContainer>
    </div>
  );
}
