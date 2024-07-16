import { useParams } from 'react-router-dom';
import projectData from '../../../config/projectData.json';

export default function ProjectPage() {
  //   const { t } = useTranslation();
  const { path } = useParams();
  const projectId = parseInt(path, 10);
  console.log(path);
  const project = projectData.projects.find((p) => p.id === projectId);
  console.log(project);
  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="relative w-screen h-screen">
      <div className="animation display flex flex-col justify-center min-h-screen">
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <h2>Technologies utilisées</h2>
          <ul className="flex">
            {project.technologies.map((tech) => (
              <li key={tech} className=" bg-emerald-500 rounded-md p-2 m-2">
                {tech}
              </li>
            ))}
          </ul>
          <h2>Captures d'écran</h2>
          <div>
            {/* <img
              src={project.gif}
              alt={`Capture d'écran de ${project.title}`}
            /> */}
          </div>
          <h2>Lien vers le projet</h2>
          <a href={project.demo}>Voir le projet</a>
          <h2>Lien vers le code source</h2>
          <a href={project.github}>Voir le code source</a>
        </div>
      </div>
    </div>
  );
}
