import PropTypes from "prop-types";
import styles from "./Table.module.css";

function Table() {
    return <table className={styles.boardTable}>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>오픈일</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>;
}

Table.propTypes = {
    // text: PropTypes.string.isRequired
}
export default Table;