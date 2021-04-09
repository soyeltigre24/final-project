import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Jumbo from "../views/Jumbo";
import { Link } from "react-router-dom";
import ADM from "./ADM";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbo />
		<br />
		<div className="row">
			<Link>
				<button type="button" className="btn btn-primary col-6">
					Customer Login
				</button>
			</Link>
			<br />
			<Link>
				<button type="button" className="btn btn-warning col-6">
					Admin Log in
				</button>
			</Link>
		</div>
	</div>
);
