import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

function Pagination({page}) {
    return <div>
        <button> &lt; </button>
        <button> &gt; </button>
    </div>;
}

Pagination.propTypes = {
    // text: PropTypes.string.isRequired
}
export default Pagination;