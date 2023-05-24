import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext } from 'react'


function Private() {



	const { store, actions } = useContext(Context);

	return (
		<div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
			<div className="login text-center">
				<h2>{store?.currentUser?.user?.full_name}</h2>

				<div className="row text-center">

					<div className="my-6 ">
						<small>YOU ARE LOGGED IN! 😎</small>
						<Link to='/'>
							<button type='submit' className="btn btn-danger text-uppercase w-100 mt-2" onClick={actions.logout}>logout</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Private
