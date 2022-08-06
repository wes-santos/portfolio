import styled from "styled-components";

const Title = styled.h2`
  font-size: 48px;
  margin-top: 80px;
  text-align: center;
`;

const Container = styled.section`
  height: 800px;
  width: 98vw;
  margin: auto;
`;

const CardsContainer = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export { Title, Container, CardsContainer };
