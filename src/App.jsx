import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Placement_Home from "./components/Placement_components/Placement_Home";
import TechnicalPage from "./components/Interview_Section/TecnicalPage";
import MainEDev from "./components/Developer_Section/MainDev";
import Logos from "./components/companies section/logos";
import DynamicProject from "./components/Projects_component/DynamicProject";
import { JavaInterviewQues } from "./components/Interview_Section/JavaInterviewQuestions/JavaInterviewQues";
import { AngularInterviewQues } from "./components/Interview_Section/AngularQuestions/AngularInterviewQues";
import { PythonInterviewQues } from "./components/Interview_Section/Python/PythonInterviewQues";
import { Cprogramming } from "./components/Interview_Section/C/C";
import { Cplusprogramming } from "./components/Interview_Section/C++/C++";
import { Nodejs } from "./components/Interview_Section/Nodejs/Nodejs";
import { JavascriptInterviewQues } from "./components/Interview_Section/Javascript/JavascriptInterviewQues";
import { Mysql } from "./components/Interview_Section/Mysql/Mysql";
import { Mangodb } from "./components/Interview_Section/Mangodb/Mangodb";
import { React } from "./components/Interview_Section/React/React";
import { Flutter } from "./components/Interview_Section/Flutter/Flutter";
import { UIUX } from "./components/Interview_Section/UIUX/UIUX";
import { Django } from "./components/Interview_Section/Django/Django";
import { HTML } from "./components/Interview_Section/HTML/html";
import { CSS } from "./components/Interview_Section/CSS/CSS";
import { SoftwareTesting } from "./components/Interview_Section/Software Testing/SoftwareTesting";
import { Bootstrap } from "./components/Interview_Section/Bootstrap/Bootstrap";
import { Springboot } from "./components/Interview_Section/Springboot/Springboot";
import { DataAnalytics } from "./components/Interview_Section/DataAnalytics/DataAnalytics";

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
        <Route path="/Angular-interview-questions-answers" element={<AngularInterviewQues/>}/>
        <Route path="/Python-interview-questions-answers" element={<PythonInterviewQues/>} />
        <Route path="/Cprogramm-interview-questions-answers" element={<Cprogramming/>} />
        <Route path="/Cplus-interview-questions-answers" element={<Cplusprogramming/>} />
        <Route path="/Nodejs-interview-questions-answers" element={<Nodejs/>} />
        <Route path="/Javascript-interview-questions-answers" element={<JavascriptInterviewQues/>} />
        <Route path="/Mysql-interview-questions-answers" element={<Mysql/>} />
        <Route path="/Mangodb-interview-questions-answers" element={<Mangodb/>} />
        <Route path="/React-interview-questions-answers" element={<React/>} />
        <Route path="/Flutter-interview-questions-answers" element={<Flutter/>} />
        <Route path="/UIUX-interview-questions-answers" element={<UIUX/>} />
        <Route path="/Django-interview-questions-answers" element={<Django/>} />
        <Route path="/HTML-interview-questions-answers" element={<HTML/>} />
        <Route path="/CSS-interview-questions-answers" element={<CSS/>} />
        <Route path="/SoftwareTesting-interview-questions-answers" element={<SoftwareTesting/>} />
        <Route path="/Bootstrap-interview-questions-answers" element={<Bootstrap/>} />
        <Route path="/Springboot-interview-questions-answers" element={<Springboot/>} />
        <Route path="/DataAnalytics-interview-questions-answers" element={<DataAnalytics/>} />
      </Routes>
    </>
  );
}

export default App;
