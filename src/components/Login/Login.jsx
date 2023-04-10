import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

Login.propTypes = {
    
};

function Login(props) {
    return (
        <div className="login">
			<div id="col-left">
				<p className="welcome">WELCOME TO...</p>
				<p className="cse">CSE UWC 2.0</p>
				<p className='content_login'>This website manages urban waste collection (UWC). You only can sign in this website by the account
					that back officers provide</p>
			</div>
			<div id="col-right">
				<form id='login_form'>
					<h1>Login</h1>

					<label htmlFor="username">Username:</label>
					<input type="text" id="username-login" name="username" placeholder="examples@gmail.com" required/>

					<label htmlFor="password">Password:</label>
					<input type="password" id="password-login" name="password" placeholder="Enter password" required/><br/>

					<input className="bt" type="submit" value="Login"/><br/>

					<div className="err">
						<a href="#">Can't log in?</a>
					</div>
				</form>
			</div>
		</div>
    );
}

export default Login;