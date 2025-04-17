import logo from './logo.svg';
// import './App.css';    // 這個要註解或刪掉，才可以使用下面的套件
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
`;
const Card = styled.div`
  background-color: #61dafb;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #282c34;
  transition: transform 0.5s;  /* 增加過渡時間使動畫更順暢 */
  &:hover {
    transform: scale(1);    /* 使放大效果 */
  }
  @media (max-width: 600px) {
    width: 80%;
    height: 150px;
    font-size: 20px;
  }
  @media (max-width: 400px) {
    width: 90%;
    height: 120px;
    font-size: 18px;
  }
  @media (max-width: 300px) {
    width: 95%;
    height: 100px;
    font-size: 16px;
  }
  @media (max-width: 200px) {
    width: 100%;
    height: 80px;
    font-size: 14px;
  }
  @media (max-width: 100px) {
    width: 100%;
    height: 60px;
    font-size: 12px;
  }
  @media (max-width: 50px) {
    width: 100%;
    height: 40px;
    font-size: 10px;
  }
`;

const Text = styled.h1`
  font-size: ${props => props.font_size || '90px'};
  font-weight: bold;
  color: ${props => props.color || 'pink'};
  margin: 10px 0; /* 增加上下邊距控制，減少佔用空間 */
  padding: 0; /* 去除內邊距 */
  line-height: 1; /* 減少行高 */
`;

const Title = styled.h1`
  font-size: ${props => props.font_size || '30px'};
  font-weight: bold;
  margin: 0; /* 去除上下邊距 */
`;
const SmallTitle = styled.h2`
  font-size: ${props => props.font_size || '20px'};

`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: flex; /* 垂直排列按鈕 */
  margin-top: 20px;      /* 與上方間隔 */
  button {
    margin: 6px 0;       /* 每個按鈕間隔 */
    padding: 8px 16px;
    font-size: 16px;
    background-color: #282c34;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`

function App() {
  const [myState, setMyState] = React.useState(10);
  return (
    <Container>
      <Card>
        <Title font_size="40px">myState卡片</Title>
        <SmallTitle>Driver Number</SmallTitle>
        <Text color='#FF1493' font_size='160px'>{myState}</Text>
        <ButtonContainer>
          <button onClick={() => setMyState(myState + 1)}>點我 +1</button>&nbsp;
          <button onClick={() => setMyState(10)}>重置</button>&nbsp;
          <button onClick={() => setMyState(myState - 1)}>點我 -1</button>
        </ButtonContainer>
      </Card>
    </Container>
  );
}

export default App;
