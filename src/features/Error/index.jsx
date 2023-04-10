import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Error from './Content/Error';

TodoError.propTypes = {
    
};

function TodoError() {
    return (
        <div>
            <Header/>
            <Error/>
        </div>
    );
}

export default TodoError;