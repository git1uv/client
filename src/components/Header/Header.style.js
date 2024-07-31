import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  background-color: #F4F2EB;
  z-index: 100;
  font-family: "seoul";
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  height: 10.3vh;
  font-family: "seoul";
`;

export const HeaderStart = styled.h1`
  display: flex; 
  align-items: center; 
  @media screen and (min-width: 801px) {
    margin-left: 6.8vw; 
  }
`;

export const HeaderHome = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
    cursor: pointer;

  img {
    height: calc(10vh / 3); 
  }
`;

export const HeaderTitle = styled.span`
  font-size: 3vh;
  margin-left: 7px;
  display: flex;
  align-items: center;
    cursor: pointer;
  img {
    height: calc(10vh / 4); 
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const HeaderTitleMobile = styled.span`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  img {
    height: 2.5vh; 
  }
`;


export const HeaderCenter = styled.div`
  width: 40vw;
  display: flex;
  justify-content: flex-start; 
  margin-right: auto; 
  margin-left: 6vw;
  @media screen and (max-width: 440px) {
    display: none;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  max-width: 100%;
  justify-content: space-between; 
`;

export const HeaderButton = styled.button`
  flex: 1; 
  width: 100px;
  border: none;
  font-size: 1.125rem;
  margin: 0 0.35vw;
  cursor: pointer;
  background-color: transparent;
  writing-mode: horizontal-tb; 
  white-space: nowrap; 
  color: ${({ active }) => (active ? '#ED6243' : '#78716C')}; 
  text-align: center; 

  &:hover {
    color: #ED6243;
  }
  img {
    height: calc(10.3vh / 5); 
  }
`;
export const MenuButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent; 
  border: none;
  font-size: 2rem;
  padding: 5px;
  color: black;
  align-items: center; /* 세로축 정렬 */
  justify-content: space-between; /* 가로축 정렬 */

`;


export const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5vw;

  @media screen and (max-width: 430px) {
    display: none;
  }
`;

