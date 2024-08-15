import styled from "styled-components";

export const ListPageWrapper = styled.div`
    width: 100%;
  height: 100%;
    display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const ListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
`;


export const MapWrapper = styled.div`
  padding: 10px;
  width: 50vw;
`;

export const ListComponent = styled.div`
  width: 200px;
    padding: 10px;
  border-radius: 8px;
  gap: 10px;
  display: flex;
  flex-direction: column;
border: 1px solid #c0c0c0;
  cursor: pointer;
`;

export const MainPageWrapper = styled.div`
    width: 80vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;