import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #f0f0f0;
  text-align: center;
  padding: 1.5rem;
`;

export const Title = styled.h1`
  color: orange;
  font-weight: 600;
  font-size: 4.5rem;
  text-transform: uppercase;
`;

export const Description = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;
`;

export const SearchBar = styled.input`
  margin: 60px auto;
  display: block;
  border: solid;
  border-color: #f0f0f0;
  border-radius: 40px;
  height: 70px;
  min-width: 600px;
  font-size: 1.2rem;
  padding: 20px;
  color: orange;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #f0f0f0;
  }
`;

export const CountriesContainer = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  margin: 20px 0;
`;

export const CountryCard = styled.div`
  padding: 30px;
  background: white;
  margin: 30px;
  width: 320px;
  border-radius: 10px;
  transition: transform 400ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  & > * {
    margin-right: 10px;
  }
`;

export const Details = styled.div`
  margin: 20px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  background: #f0f0f0;
  padding: 100px;
  text-align: center;
  font-size: 30px;
`;

export const ScrollToTop = styled.div`
  position: fixed;
  bottom: 20px;
  z-index: 1300;
  right: 10px;
  width: 450px;
  &:hover {
    cursor: pointer;
  }
  display: ${(props) => (props.showScroll ? "flex" : "none")};
`;
