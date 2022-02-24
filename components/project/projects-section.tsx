import React from 'react';

import Button from '../button';
import {Project} from '../../src/interface';
import Section from '../home/section';
import SectionActions from '../home/section-actions';
import SectionInfo from '../home/section-info';
import Projects from './projects';

const MAX_PROJECTS = 3;
const ALL_PROJECTS = undefined;

const ProjectsSection: React.FC<{projects: Project[]}> = ({projects}) => {
  const [max, setMax] = React.useState<number | undefined>(MAX_PROJECTS);

  const toggleMax = React.useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setMax(current => current === ALL_PROJECTS ? MAX_PROJECTS : ALL_PROJECTS);
  }, []);

  if (!projects) {
    return null;
  }

  return (
    <>
      <SectionInfo>
        {projects && <Projects projects={projects.slice(0, max)} />}
      </SectionInfo>
      {projects.length > MAX_PROJECTS && (
        <SectionActions>
          <Button primary onClick={toggleMax}>See more</Button>
        </SectionActions>
      )}
    </>
  );
};

export default ProjectsSection;
