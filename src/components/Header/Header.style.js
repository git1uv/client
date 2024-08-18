import styled from 'styled-components';
// import "../../assets/font/font.css"


export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  top: 0;
  background-color: #EEECE3;
  z-index: 100;
  // font-family: "seoul";
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  height: 10.3vh;
  // font-family: "seoulBold";
  @media (max-width: 430px){
    height: 6.5vh;
  }

`;

export const HeaderStart = styled.h1`
  display: flex; 
  align-items: center; 
  justify-content: center;
  @media screen and (max-width: 430px) {
    margin-left: 4vw; 
  }
  @media screen and (min-width: 431px) {
    margin-left: 5vw; 
  }
`;

export const HeaderHome = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  display: flex;
  cursor: pointer;

  img {
    height: calc(10.3vh / 3);
    
    @media (max-width: 430px){
      height: calc(6.5vh / 3);
  }
  }
`;

export const HeaderCenter = styled.div`
  width: 40vw;
  display: flex;
  justify-content: flex-start; 
  margin-right: auto; 
  margin-left: 6.9vw;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  max-width: 100%;
`;

export const HeaderButton = styled.button`
  flex: 1; 
  border: none;
  font-size: 1.125rem;
  margin: 0 1.74vw;
  cursor: pointer;
  background-color: transparent;
  writing-mode: horizontal-tb; 
  white-space: nowrap; 
  font-family: SeoulHangang;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: ${({ active }) => (active ? '#ED6243' : '#4C434E')}; 
  text-align: center; 

  &:hover {
    color: #ED6243;
  }
  img {
    height: calc(10.3vh / 5); 
  }
`;
export const MenuButton = styled.button`
  background-color: transparent; 
  border: none;
  font-size: 2rem;
  color: black;
  align-items: center; /* 세로축 정렬 */
  justify-content: space-between; /* 가로축 정렬 */

`;


export const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  @media screen and (min-width: 431px) {
    margin-right: 7.8vw;
  }
`;

