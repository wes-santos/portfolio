import ProjectCard from '../ProjectCard/ProjectCard';
import * as C from './styles';
import image from '../../images/slider-image2.jpg';

export default function Projects() {
  const genericArray = [1,2,3,4,5,6,7,8,9];

  return (
    <C.Container>
      <C.Title>Projects</C.Title>
      <C.CardsContainer>
        {genericArray.map((_e) => ProjectCard(image))}
      </C.CardsContainer>
    </C.Container>
  )
}
