export default function ProjectCard({ project }) {
    return (
      <div className="p-6 border rounded shadow">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2">{project.description}</p>
        <p className="mt-2 text-sm text-gray-500">
          {project.tech.join(", ")}
        </p>
      </div>
    );
  }
  