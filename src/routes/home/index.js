import { h } from 'preact';
import style from './style';

const Home = () => (
  <div class={style.home}>
    <h1>Trang chủ</h1>
    <p>Đây là thành phần Home.compoment</p>
  </div>
);

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  )
}

export default Home;
