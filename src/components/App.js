import AppRoutes from "./Routes/AppRoutes";
import {BrowserRouter} from "react-router-dom"
import "../styles/global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;


