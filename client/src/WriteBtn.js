import styles from "./WriteBtn.module.css";

function WriteBtn() {
    const onClick = () => {
        const title = prompt('제목을 입력하세요.');

        
    }

    return <button className={styles.btn} onClick={onClick}>글쓰기</button>;
}
export default WriteBtn;