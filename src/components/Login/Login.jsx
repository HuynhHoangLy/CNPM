import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {Axios} from 'axios';

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

async function loginUser(credentials) {
	return await fetch('http://localhost:7000/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
	.then (data => data.json())
}

function Login({setToken}) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async e => {
		// e.preventDefault();
		const token = await loginUser({
			"email": username,
			"password": password
		});
		console.log(token);
		setToken(token);
	}

    return (
        <div className="login">
			<div id="col-left">
				<p className="welcome" style={{width: '1000px', marginLeft: '-24vw'}}>WELCOME TO...</p>
				<p className="cse">CSE UWC 2.0</p>
				<p className='content_login'>This website manages urban waste collection (UWC). You only can sign in this website by the account
					that back officers provide</p>
			</div>
			<div id="col-right">
				<form id='login_form' onSubmit={handleSubmit}>
					<h1>Login</h1>

					<label htmlFor="username">Username:</label>
					<input type="text" 
						id="username-login" 
						name="username" 
						placeholder="Enter username" 
						required 
						onChange={e => setUsername(e.target.value)}
					/>

					<label htmlFor="password">Password:</label>
					<input type="password" 
						id="password-login" 
						name="password" 
						placeholder="Enter password" 
						required
						onChange={e => setPassword(e.target.value)}
					/><br/>

					<button className='bt' type='submit'>Login</button>

					<div className="err">
						<a href="#">Can't log in?</a>
					</div>
				</form>
			</div>
		</div>
    );
}

export default Login;