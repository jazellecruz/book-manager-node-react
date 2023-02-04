// import  TestForm  from "./TestForm";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>      
    </>
  );
}

export default App;


