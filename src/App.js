import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import styled from "styled-components";

function App() {
  return (
    <>
      <Title>Movie App</Title>
      <Router>
        {/* Switch는 if 같은 조건문 인듯 */}
        <Switch>
          <Route path="/abot-us">
            <h1>Hello</h1>
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;

const Title = styled.h1`
  width: fit-content;
  margin: 50px auto 10px;
  font-size: 40px;
  color: #222;
`