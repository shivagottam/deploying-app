import React, { useState } from "react";
import { Link, Prompt, useHistory, useRouteMatch } from "react-router-dom";

export default function Projects() {
	const [ projectId, setProjectId ] = useState("");
	let match = useRouteMatch();
	let history = useHistory();
	const redirect = (e) => {
		e.preventDefault();
		history.push(`${match.url}/${projectId}`);
	};
	return (
		<div>
			<h1>My Projects</h1>
			<form onSubmit={redirect} className="d-flex justify-content-center align-items-center">
				<input
					type="text"
					className="form-control w-50 rounded-0 border-0"
					value={projectId}
					onChange={(e) => setProjectId(e.target.value)}
				/>
				<button type="submit" className="btn btn-secondary rounded-0">
					Search
				</button>
			</form>
			<nav className="navbar navbar-expand-lg">
				<Prompt when={projectId.length > 0} message="Are you want to leave this page?" />
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to={`${match.url}/chat-application`} title="Chat app" className="nav-link text-primary rounded">
							Chat App
						</Link>
					</li>
					<li className="nav-item">
						<Link to={`${match.url}/ecommerce-application`} className="nav-link text-info rounded">
							ECommerce App
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
