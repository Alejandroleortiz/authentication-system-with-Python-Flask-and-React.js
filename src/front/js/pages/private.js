
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


import React from 'react'

function Private() {
	return (
		<div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
			<div className="login text-center">
				<h2>USER</h2>

				<div className="row text-center">

					<div className="my-6 ">
						<small>YOU ARE LOGGED IN! 😎</small>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Private
