import React from 'react';
import PropTypes from 'prop-types';

Pagination.proTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChage: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChage: null,
}

function Pagination(props) {
    const {pagination, onPageChage} = props;
    const {page, limit, totalRows} = pagination;
    const totalPage = Math.ceil(totalRows / limit);

    function handlePageChange(newPage) {
        if(onPageChage){
            onPageChage(newPage);
        }
    }
    return (
        <div>
            <button onClick={() => handlePageChange(page -1)} disabled={page <= 1}>Prev</button>
            <button onClick={() => handlePageChange(page +1)} disabled={page >= totalPage}>Next</button>
        </div>
    )
}

export default Pagination
