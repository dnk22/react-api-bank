import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRouter from "./routes";

function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
}

export default App;
