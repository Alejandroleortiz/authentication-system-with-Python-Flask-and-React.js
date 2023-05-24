import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Register = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();


	return (
		<div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
			<div className="login">
				<h2>Sign Up</h2>
				<form className="needs-validation"
					onSubmit={(e) => {
						e.preventDefault();
						actions.register(e, navigate)
					}}>
					<div className="form-group was-validated mb-2">
						<label htmlFor="full_name" className="form-label">Full Name</label>
						<input type="full_name" className="form-control" id="full_name" required />
						<div className="invalid-feedback">
							Please Enter Your Full Name
						</div>
					</div>
					<div className="form-group was-validated mb-2">
						<label htmlFor="email" className="form-label">Email Adress</label>
						<input type="email" className="form-control" id="email" required />
						<div className="invalid-feedback">
							Please Enter Your Email
						</div>
					</div>
					<div className="form-group mb-2 was-validated">
						<label htmlFor="password" className="form-label">Password</label>
						<input type="password" className="form-control" id="password" required />
						<div className="invalid-feedback">
							Please Enter Your Password
						</div>
					</div>
					<div className="text-center mt-4">
						<Link to='/'>
							<button type="button" className="btn btn-sm btn-danger me-2 w-30" >
								Cancel
							</button>
						</Link>
						<button type="submit" className="btn btn-sm btn-success w-30">
							Save
						</button>

					</div>
				</form>
			</div>
		</div>
	);
};
