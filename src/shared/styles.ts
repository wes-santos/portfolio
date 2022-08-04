import styled from "styled-components";
import SliderImage from '../images/slider-image.jpg';

const Header = styled.header`
  align-items: center;
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
    color: black;
    text-decoration: none;
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    font-size: 26px;
    &:hover {
      cursor: pointer;
    }
  }

  .active {
    font-weight: bold;
  }

  ul, ul li a {
    display: flex;
    font-size: 20px;
    gap: 40px;
    letter-spacing: 0.5px;
    list-style: none;
    transition: all 0.2s ease-in-out;

    a:after {
      bottom: -8px;
      border-radius: 3px;
      content: "";
      position: absolute;
      background-color: black;
      height: 3px;
      left: 0;
      width: 0;
      transition: all 0.35s ease-in-out;
    }

    a:hover:after {
      width: 100%;
    }
  }
`;

const Slider = styled.section`
  overflow: hidden;
  
  .slider-image {
    background-image: url(${SliderImage});
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    display: flex;
    align-items: center;
    opacity: 0.8;

    h3 {
      font-size: 48px;
      margin-left: 70px;
    }
    
    .slider-subtitle {
      color: grey;
      font-size: 24px;
      font-weight: normal;
      margin-left: 70px;
    }
    
    .open-code-slider, .close-code-slider {
      font-family: 'Roboto Mono';
      font-size: 48px;
      font-weight: bold;
      margin-left: 40px;
      letter-spacing: -5px;
    }
  }
`

export { Header, Slider };