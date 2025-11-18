import Project_header from "./Project_header";
import Project_About from "./Project_About";
import Frontend_Module from "./Frontend_Module";
import Backend_Module from "./Backend_Module"
// import ModuleCard from "./Modulecard";

export default function E_commerce() {
  return (
    <>
    <Project_header />
    <Project_About />
    {/* <ModuleCard /> */}
    <Frontend_Module />
    <Backend_Module />
    </>
  );
}