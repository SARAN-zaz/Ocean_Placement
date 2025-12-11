import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Placement_Home from "./components/Placement_components/Placement_Home";
import TechnicalPage from "./components/Interview_Section/TecnicalPage";
import MainEDev from "./components/Developer_Section/MainDev";
import Logos from "./components/companies section/logos";
import DynamicProject from "./components/Projects_component/DynamicProject";
import { JavaInterviewQues } from "./components/Interview_Section/JavaInterviewQuestions/JavaInterviewQues";

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Placement_Home />} />
        <Route path="/Placement_Home" element={<Placement_Home />} />
        <Route path="/tech" element={<TechnicalPage />} />
        <Route path="/Developer" element={<MainEDev />} />
        <Route path="/Logos" element={<Logos />} />
        <Route path="/project/:projectId" element={<DynamicProject />} />
        <Route path="/java-interview-questions-answers" element={<JavaInterviewQues/>}/>
      </Routes>
    </>
  );
}

export default App;
