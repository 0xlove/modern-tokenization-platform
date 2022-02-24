import styled from 'styled-components';
import {Project} from 'src/interface';
import {theme} from 'styles/theme';
import {getStrapiMedia} from 'utils/api';
import Button from 'components/button';
import {breakpoints} from 'components/grid/consts';
import {useRouter} from 'next/router';

interface ProjectCardProps {
  project: Project,
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
  const router = useRouter();
  const {name, description, image, slug} = project;
  const imageUrl = getStrapiMedia(image.url);

  return <Card>
    <ButtonContainer>
      <Button primaryContent primary onClick={() => {
        router.push(`/projects/${slug}`);
      }}>Read more</Button>
    </ButtonContainer>
    <Image 
      src={imageUrl? imageUrl: ''}
      alt={image.alternativeText}
    />
    <ProjectName>{name}</ProjectName>
    <p>{description}</p>
  </Card>;
};

const ButtonContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: visibility 200ms, opacity 200ms;
  z-index: 100;
`;

const Card = styled.div`  
  position: relative;
  width: clamp(18rem, 25vw, 32rem);
  height: 454px;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${theme.colors.primaryBG};
  text-align: center;
  transition: opacity 400ms ease-in-out;
  
  & > p {
    padding: 20px;
    max-width: unset;
    line-height: 120%;
    font-size: clamp(1.1rem, 1.25vw, 1.4rem);
  }
  &::before {
    visibility: hidden;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    background-color: #22202F;
    border-radius: 24px;
    transition: visibility 200ms, opacity 300ms ease-in-out;
  }
  &:hover ::before {
    visibility: visible;
    opacity: .8;
  }
  &:hover ${ButtonContainer} {
    visibility: visible;
    opacity: 1;
  }

  @media ${breakpoints.down(breakpoints.lg)} {
    height: 350px;
  }

`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  object-fit: cover;
  object-position: center;
`;

const ProjectName = styled.h3`
  color: #4E60F4;
  font-size: clamp(1.2rem, 1.35vw, 1.5rem);
  line-height: 110%;
  margin-top: 20px;
  padding: 0 10px;
`;

export default ProjectCard;
