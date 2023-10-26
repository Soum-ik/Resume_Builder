import HomePage from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SingUpPage from "./components/pages/SingUpPage";
import LogInPage from "./components/pages/LogInPage";

const App = () => (
  <div className=" w-full overflow-hidden ">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singUppage" element={<SingUpPage />} />
      <Route path="/logInPage" element={<LogInPage />} />
    </Routes>
  </div>
);
export default App;
