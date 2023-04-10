import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

TodoLogin.propTypes = {
    
};

function TodoLogin(props) {
    return (
        <div>
            <Header/>
            <Login/>  
        </div>
    );
}

export default TodoLogin;