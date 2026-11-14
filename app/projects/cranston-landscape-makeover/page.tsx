import ProjectPage, { projectMeta } from "../../components/ProjectPage";
import { projectDetails } from "../data";

const project = projectDetails.cranston;

export const metadata = projectMeta(project);

export default function Page() {
  return <ProjectPage project={project} />;
}
