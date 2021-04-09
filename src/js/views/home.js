import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Jumbo from "../views/Jumbo";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbo />
		<br />
		<div className="row">
			<button type="button" className="btn btn-primary col-6">
				Customer Login
			</button>
			<br />
			<button type="button" className="btn btn-warning col-6">
				Admin Log in
			</button>
		</div>
	</div>
);
