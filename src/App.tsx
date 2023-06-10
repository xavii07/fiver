import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RouterLayout from "./components/RouterLayout";
import { RUTAS_PUBLICAS } from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${RUTAS_PUBLICAS.HOME}`} element={<RouterLayout />}>
          <Route path={`${RUTAS_PUBLICAS.HOME}`} element={<HomePage />} />
        </Route>
        <Route path={`${RUTAS_PUBLICAS.LOGIN}`} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
