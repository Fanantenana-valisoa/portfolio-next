import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <section className="p-20">
      <h2 className="text-3xl font-bold mb-6">Mes projets</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
