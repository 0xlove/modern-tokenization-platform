import {breakpoints} from 'components/grid/consts';
import {Project} from 'src/interface';
import styled from 'styled-components';
import ProjectCard from './project-card';

interface ProjectProps {
  projects: Project[]
}

const Projects: React.FC<ProjectProps> = ({projects}) => {

  return <ProjectContainer>
    {projects.map(el => (
      <ProjectCard key={el.id} project={el}/>
    ))}
  </ProjectContainer>;
};

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${breakpoints.down(breakpoints.lg)} {
    grid-template-columns: unset;
  }
`;

export default Projects;
