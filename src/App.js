import logo from './logo.svg';
// import './App.css';    // 這個要註解或刪掉，才可以使用下面的套件
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
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
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #282c34;
  transition: transform 0.5s;  /* 增加過渡時間使動畫更順暢 */
  &:hover {
    transform: scale(4);    /* 使放大效果 */
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

function App() {
  return (
    <Container>
      <Card>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React with Emotion!</p> */}
        <h1>懶覺</h1>
      </Card>
    </Container>
  );
}

export default App;
