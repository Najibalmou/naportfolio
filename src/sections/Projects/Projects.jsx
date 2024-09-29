import styles from './ProjectsStyles.module.css';
import IstaZenataWebsite from '../../assets/istalogoo.jpeg';
import SocialMediaApp from '../../assets/Social_media_app.png';
import EcommercePlatform from '../../assets/Eco_platform.png';
import FitnessWebiste from '../../assets/Gym center.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={IstaZenataWebsite}
          link="https://kourdroid.github.io/ista/index.html"
          h3="Ista Zenata Website"
          p="Show website"
        />
        <ProjectCard
          src={SocialMediaApp}
          link="#"
          h3="Social Media App"
          p="Show website"
        />
        <ProjectCard
          src={EcommercePlatform}
          link="#"
          h3="E-commerce Platform"
          p="Show website"
        />
        <ProjectCard
          src={FitnessWebiste}
          link="https://najibalmou.github.io/nagym/"
          h3="Fitness Website"
          p="Show website"
        />
      </div>
    </section>
  );
}

export default Projects;
