import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routers/AppRoutes";
import "./Assets/Css/global.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
