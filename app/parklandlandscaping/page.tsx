import ProjectPage, { projectMeta } from "../components/ProjectPage";
import { projectDetails } from "../projects/data";

const project = projectDetails.parkland;

export const metadata = projectMeta(project);

export default function Page() {
  return <ProjectPage project={project} />;
}
