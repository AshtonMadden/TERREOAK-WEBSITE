import ProjectPage, { projectMeta } from "../../components/ProjectPage";
import { projectDetails } from "../data";

const project = projectDetails.commercialRockBeds;

export const metadata = projectMeta(project);

export default function Page() {
  return <ProjectPage project={project} />;
}
