import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import styles from "./Pagination.module.css";

function Pagination({page}) {
    const [beforePage, setBeforePage] = useState(page - 1);
    const [afterPage, setAfterPage] = useState(page + 1);
    const [nowPage, setNowPage] = useState(page);

    const beforeClick = () => {
        console.log('before Clicked!');
        setBeforePage((prev) => prev - 1);
        setAfterPage((prev) => prev - 1);
        setNowPage((prev) => prev - 1);
    }

    const afterClick = () => {
        console.log('after Clicked!');
        setBeforePage((prev) => prev + 1);
        setAfterPage((prev) => prev + 1);
        setNowPage((prev) => prev + 1);
    }

    useEffect(() => {
        console.log('beforePage is', beforePage);
        console.log('afterPage is', afterPage);
        console.log('nowPage is', nowPage);
    }, [beforePage, afterPage, nowPage]);

    return <div>
        <Table page={nowPage} />
        <button onClick={beforeClick}> &lt; {beforePage} </button>
        <button onClick={afterClick}> &gt; {afterPage} </button>
    </div>;
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired
}
export default Pagination;