import { projects } from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import FeaturedProject from '@/components/ui/FeaturedProject';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          refTag="04 / Projects"
          title="Things I've shipped"
          description="A mix of security tooling, blockchain systems, and AI-assisted products — each one solving a real, specific problem."
        />

        <div className="mb-8">
          <FeaturedProject project={featured} />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
