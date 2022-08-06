import * as C from '../../shared/styles';

export default function Slider() {
  return(
    <C.Slider>
      <div className="test">
        <div className="slider-image">
          <div>
            <span className="open-code-slider">{'<'}</span>
            <h3>
              Full Stack
              <br />
              Web Developer
            </h3>
            <h4 className="slider-subtitle">
                I love brands and people that want to change and impact the world
            </h4>
            <span className="close-code-slider">
              {' />'}
            </span>
          </div>
        </div>
      </div>
    </C.Slider>
  );
}