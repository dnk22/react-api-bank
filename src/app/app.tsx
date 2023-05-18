import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRouter from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <HashRouter>
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </HashRouter>
  );
}

export default App;
