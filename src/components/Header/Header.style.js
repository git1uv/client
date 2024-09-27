import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #EEECE3;
  background: ${({ isMain }) => isMain 
    ? 'linear-gradient(0deg, rgba(238,236,227,0) 0%, rgba(238,236,227,0) 51%, rgba(238,236,227,1) 100%)' 
    : '#EEECE3'};

  z-index: 100;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  height: 10.3vh;
  @media (max-width: 430px){
    height: 6.5vh;
  }

`;

export const HeaderStart = styled.h1`
  display: flex; 
  align-items: center; 
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 430px) {
    margin: 0 0 0 2vw; 
  }
  @media screen and (min-width: 431px) {
    margin: 0 0 0 5vw;  
  }
`;

export const HeaderHome = styled.button`
  border: none;
  background-color: transparent;
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
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

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

