import React, { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";
import axios from "axios";
import Example, { Example2, Example3 } from "./Example";
// Comment below 3 variables while testing.
// const UsersData = new Request("/data.json");
// const TodoData = new Request("/todo.txt");
// const ContactData = new Request("/contact.md");

export default function YoutubeUsers() {
	const [ users, setUsers ] = useState([
		{ id: 1, name: "Venkatesh", website: "github.com" },
		{ id: 2, name: "Chinni", website: "github.com" },
		{ id: 3, name: "Vivek", website: "github.com" },
	]);
	const [ todo, setTodo ] = useState("");
	const [ contact, setContact ] = useState("");
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then(({ data }) => {
				console.log(data);
				data.map((user) => {
					user.website = "youtube.com/channel/UC1MgMO9NkzCyz1YeAGp8SnQ";
				});
				setUsers(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const addUser = () => {
		let newUser = { name: "Venkatesh", website: "github.com" };
		axios
			.post("https://jsonplaceholder.typicode.com/users", {
				data: JSON.stringify(newUser),
			})
			.then(({ data }) => {
				console.log(data);
				alert("User added successfully!");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const updateUser = () => {
		let newUser = { name: "Venkatesh", website: "github.com" };
		axios
			.put("https://jsonplaceholder.typicode.com/users/10", {
				body: JSON.stringify(newUser),
			})
			.then(({ data }) => {
				console.log(data);
				alert("User updated successfully!");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const deleteUser = () => {
		axios
			.delete("https://jsonplaceholder.typicode.com/users/10")
			.then(({ data }) => {
				console.log(data);
				alert("User deleted successfully!");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<h1>Youtube Users</h1>
			{/* <Example />
			<Example2 />
			<Example3 /> */}

			<div className="d-flex justify-content-center align-items-center">
				<button className="btn btn-primary m-2" onClick={addUser}>
					Add User
				</button>
				<button className="btn btn-primary m-2" onClick={updateUser}>
					Update User
				</button>

				<button className="btn btn-primary m-2" onClick={deleteUser}>
					Delete User
				</button>
			</div>
			<div className="d-flex justify-content-center flex-wrap">
				{users.slice(0, 4).map((user) => (
					<div className="m-3 p-3" key={user.id}>
						<img src="logo192.png" alt="profile" />
						<h2>{user.name}</h2>
						<a
							href={`https://${user.website}`}
							target="_blank"
							className="link-none item text-info"
							style={{ textDecoration: "none" }}>
							Website Link
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
