import { Routes, Route } from "react-router-dom";
console.log("count");
// all pages
import HomePage from "./components/pages/HomePage";
import SingUpPage from "./components/pages/SingUpPage";
import LogInPage from "./components/pages/LogInPage";
import TemplatePage from "./components/pages/Templetspage";
import Create_ResumePage from "./components/pages/Create-ResumePage";
import Template1 from "./components/Templates/Template1/Template1Layout";



const App = () => (
  <div className=" w-full overflow-hidden ">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singUppage" element={<SingUpPage />} />
      <Route path="/logInPage" element={<LogInPage />} />
      <Route path="/templatesPage" element={<TemplatePage />} />
      <Route path="/createResumePage" element={<Create_ResumePage />} />
      <Route path="/Resume" element={<Template1/>} />
    </Routes>
  </div>
);
export default App;
