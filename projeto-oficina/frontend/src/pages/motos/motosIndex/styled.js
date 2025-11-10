import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto 250px;
  padding: 20px;
  width: 85%;
  max-height: 90vh;
  position: relative;
`;

export const DivTitle = styled.h1`
  background: #930707;
  border: 1px solid #fffff0;
  margin: 20px auto;
  width: 450px;
  padding: 10px;
  border-radius: 40px;
  box-shadow: 0 0 4px #fffff0;
`;

export const ButtonNew = styled.button`
  background: #fffff0;
  width: 200px;
  position: absolute;
  padding: 17px;
  border: none;
  border: 2px solid #930707;
  border-radius: 9px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #930707;
  top: -5%;
  right: 3%;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    border-color: #252525;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const TitleTop = styled.h1`
  color: white;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-style: normal;
`;

export const InsertContent = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 400px);
  grid-auto-columns: calc(50% - 10px);
  padding: 20px;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  scrollbar-color: #fffff0 #252525;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #252525;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #930707;
    border-radius: 5px;
    border: 2px solid #fffff0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #c20a0a;
  }
`;

export const Containers = styled.div`
  height: 400px;
  border: 1px solid #fffff0;
  border-radius: 9px;
  background: #252525;
  box-shadow: 0 1px 6px 2px #930707;
`;
