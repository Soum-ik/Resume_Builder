import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SingUpPage from "./components/pages/SingUpPage";
import LogInPage from "./components/pages/LogInPage";
import TemplatePage from "./components/pages/Templetspage";

const App = () => (
  <div className=" w-full overflow-hidden ">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singUppage" element={<SingUpPage />} />
      <Route path="/logInPage" element={<LogInPage />} />
      <Route path="/templatesPage" element={<TemplatePage />} />
    </Routes>
  </div>
);
export default App;
