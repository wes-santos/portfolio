import styled from "styled-components";

const Card = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  justify-content: end;
  background-color: blue;
  border-radius: 10px;
  height: 400px;
  width: 32%;
  margin: 9px 0;
  padding: 30px;

  a {
    text-decoration: none;
    color: white;
  }

  h3 {
    font-size: 22px;
    color: white;
  }

  p {
    color: white;
    font-size: 18px;
  }

  .project-card-description {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px;
    width: 100%;
  }
`;

export { Card };
