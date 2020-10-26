import styled from "styled-components";

const width = "300px";

export const Header = styled.div`
  background: #f0f0f0;
  text-align: center;
  font-size: 4rem;
  text-transform: upperCase;
  color: orange;
  padding: 60px;
  font-weight: bolder;
`;

export const ExerciseCard = styled.div`
  min-height: 200px;
  background: orange;
  width: ${width};
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 70px 0;
  transition: padding 400ms ease-in-out;
  &:hover {
      padding: 50px 0;
  }
`;

export const TitleContainer = styled.div`
  height: 100%;
  width: ${width};
  background: #07a1de;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: font-size 500ms ease-in-out;
  &:hover {
      font-size: 22px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;
