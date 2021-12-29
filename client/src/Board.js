import { useState, useEffect } from "react";
// import Button from "./Button";
import Pagination from "./Pagination";
import WriteBtn from "./WriteBtn";
import styles from "./Board.module.css";

function Board() {
  // const [value, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);

  // useEffect(() => {
  //   console.log('once');
  // }, []);

  // useEffect(() => {
  //   console.log('keyword is', keyword);
  // }, [keyword]);

  return (
    <div>
      <h1 className={styles.title}>Welcome board</h1>
      {/* <input type="text" placeholder="input here" onChange={onChange} value={keyword} />
      <button onClick={onClick}>Click Me!</button> */}
      <WriteBtn />
      <Pagination page={1} />
      <WriteBtn />
    </div>
  );
}

export default Board;
