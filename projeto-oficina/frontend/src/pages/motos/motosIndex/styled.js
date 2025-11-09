import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto 250px;
  padding: 20px;
  width: 85%;
  background: red;
  overflow-y: auto;
  max-height: 90vh;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 20px;
  background: #fffff0;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Containers = styled.div`
  flex-basis: 45%;
  flex-grow: 1;
  min-width: 450px;
  height: 400px;
  border: 1px solid #fffff0;
  border-radius: 9px;
  background: #252525;
  box-shadow: 0 1px 6px 2px #930707;
`;
