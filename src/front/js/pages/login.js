import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	useEffect(() => {
		if (store.currentUser !== null) navigate('/private')
	}, [])

	return (
		<div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
			<div className="login">
				<h2>Login Form</h2>
				<form className="needs-validation"
					onSubmit={(e) => {
						// e.preventDefault();
						actions.login(e, navigate)
					}}
				>
					<div className="form-group was-validated mb-2">
						<label htmlFor="email" className="form-label">Email Adress</label>
						<input type="email" className="form-control" id="email"
							placeholder="Your email address" required />
						<div className="invalid-feedback">
							Please Enter Your Email
						</div>
					</div>
					<div className="form-group mb-2 was-validated">
						<label htmlFor="password" className="form-label">Password</label>
						<input type="password" className="form-control" id="password"
							placeholder="Password" required />
						<div className="invalid-feedback">
							Please Enter Your Password
						</div>
					</div>
					<div className="form-group form-check mb-2">
						<input type="checkbox" className="form-check-input" />
						<label htmlFor="check" className="form-check-label">Remember me</label>
					</div>
					<button type='submit' className="btn btn-success w-100 mt-2">SIGN IN</button>
				</form>
				<div className="py-3 text-center">
					<span className="text-xs text-uppercase fw-bold">or</span>
				</div>
				<div className="row text-center">

					<div className="my-6 ">
						<small>Don't have an account? </small>
						<Link to='/register'>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
