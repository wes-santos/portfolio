import * as C from './styles';

export default function ProjectCard(image: string) {
  return (
    <C.Card style={ { backgroundImage: `url(${image})` } }>
      <a href="#">
        <div
          className="project-card-description"
        >
          <h3>Project Name</h3>
          <div>
            <p>Project description</p>
          </div>
        </div>
      </a>
    </C.Card>
  );
}
