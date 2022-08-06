import styled from "styled-components";
import SliderImage from '../images/slider-image2.jpg';

const Header = styled.header`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  left: 0;
  overflow: hidden;
  padding: 30px 40px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  a {
    color: white;
    text-decoration: none;
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    color: white;
    font-size: 32px;
    &:hover {
      cursor: pointer;
    }
  }

  .active {
    font-weight: bold;
  }

  ul, ul li a {
    color: white;
    display: flex;
    font-size: 26px;
    gap: 50px;
    letter-spacing: 0.5px;
    list-style: none;
    transition: all 0.2s ease-in-out;

    a:after {
      background-color: #99F2E9;
      border-radius: 3px;
      bottom: -8px;
      content: "";
      height: 3px;
      left: 0;
      position: absolute;
      transition: all 0.35s ease-in-out;
      width: 0;
    }

    a:hover:after {
      width: 100%;
    }
  }
`;

const Slider = styled.section`
  overflow: hidden;

  .test {
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  .slider-image {
    align-items: center;
    background-image: url(${SliderImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    height: 100vh;
    max-width: 100%;
    opacity: 0.8;
    width: 100vw;
    z-index: 1;

    h3 {
      color: white;
      font-size: 80px;
      margin-left: 70px;
    }
    
    .slider-subtitle {
      color: rgba(255, 255, 255, 0.7);
      font-size: 20px;
      font-weight: 300;
      margin-left: 70px;
    }
    
    .open-code-slider, .close-code-slider {
      color: #99F2E9;
      font-family: 'Roboto Mono';
      font-size: 48px;
      font-weight: bold;
      letter-spacing: -5px;
      margin-left: 40px;
    }
  }
`

export { Header, Slider };
