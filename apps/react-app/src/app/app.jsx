// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import axios from 'axios';

export function App() {
  const [data, setData] = useState({});
  async function getData() {
    const results = await axios.get('http://localhost:3333/api');
    setData(results.data);
  }
     console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Hello World ! {data?.message}</h1>
    </div>
  );
}

export default App;
