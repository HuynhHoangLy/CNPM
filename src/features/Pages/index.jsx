import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../components/Page/Pagination';
import queryString from 'query-string';

TodoPage.propTypes = {
    
};

function TodoPage(props) {

    const [page, setPage] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
    });

    function handlePageChange(newPage) {
        console.log('New page: ',newPage);
        setFilter({
            ...filter,
            _page: newPage,
        })
    }

    return (
        <div>
            <Pagination 
                pagination={page}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default TodoPage;