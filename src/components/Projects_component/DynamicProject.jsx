import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ProjectData } from "../../data/ProjectData";
import {
  ShoppingCart,
  ClipboardList,
  FileUser,
  ClipboardClock,
  LayoutDashboard,
  HandPlatter,
  BookOpenCheck,
  LayoutList
} from "lucide-react";
import ProjectLayout from "./ProjectLayout";

const iconMap = {
  ecommerce: ShoppingCart,
  taskmanagement: ClipboardList,
  studentinformationsystem: FileUser,
  expensetrackerapplication: ClipboardClock,
  socialmediadashboard: LayoutDashboard,
  restaurantbookingwebsite: HandPlatter,
  onlinequizapplication: BookOpenCheck,
  petAdoptionPlatform: BookOpenCheck,
  realEstateListingWebsite: LayoutList,
  appointmentSchedulingApp: ClipboardClock
};

export default function DynamicProject() {
  const { projectId } = useParams();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!projectId)
    return <h1 className="text-center text-3xl mt-10">No project selected</h1>;

  const project = ProjectData[projectId];

  if (!project) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Project Not Found: {projectId}
      </h1>
    );
  }

  const Icon = iconMap[projectId] || ShoppingCart;

  return (
    <ProjectLayout
      header={project.about.title}
      icon={Icon}
      about={project.about}
      frontend={project.modules.frontendModule}
      backend={project.modules.backendModule}
    />
  );
}
