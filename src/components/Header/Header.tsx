import * as C from '../../shared/styles';

export default function Header() {
  return (
    <C.Header>
      <div>
        <h2><a href="#">Weslley Santos</a></h2>
      </div>
      <nav>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </C.Header>
  );
}
