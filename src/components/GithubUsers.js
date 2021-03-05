import React, { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";
// Comment below 3 variables while testing.
// const UsersData = new Request("/data.json");
// const TodoData = new Request("/todo.txt");
// const ContactData = new Request("/contact.md");

export default function GithubUsers() {
	const [ users, setUsers ] = useState([
		{ id: 1, name: "Venkatesh", website: "github.com" },
		{ id: 2, name: "Chinni", website: "github.com" },
		{ id: 3, name: "Vivek", website: "github.com" },
	]);
	const [ todo, setTodo ] = useState("");
	const [ contact, setContact ] = useState("");
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				data.map((user) => {
					user.website = "youtube.com/channel/UC1MgMO9NkzCyz1YeAGp8SnQ";
				});
				setUsers(data);
			})
			.catch((error) => {
				console.log(error);
			});
		// Comment below 3 fetch while testing.
		// fetch(UsersData).then((response) => response.json()).then((data) => {
		// 	console.log(data);
		// 	setUsers((prevData) => {
		// 		return [ ...prevData, data ];
		// 	});
		// });
		// fetch(TodoData).then((response) => response.text()).then((data) => {
		// 	console.log(data);
		// 	setTodo(data);
		// });
		// fetch(ContactData).then((response) => response.text()).then((data) => {
		// 	console.log(data);
		// 	setContact(data);
		// });
	}, []);
	const addUser = () => {
		let newUser = { name: "Venkatesh", website: "github.com" };
		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: JSON.stringify(newUser),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				alert("User added successfully!");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const updateUser = () => {
		let newUser = { name: "Venkatesh", website: "github.com" };
		fetch("https://jsonplaceholder.typicode.com/users/10", {
			method: "PUT",
			body: JSON.stringify(newUser),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				alert("User updated successfully!");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const deleteUser = () => {
		fetch("https://jsonplaceholder.typicode.com/users/10", {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				alert("User deleted successfully!");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<h1>Github Users</h1>
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

			{/* Comment below 2 tags while testing */}
			{/* <p dangerouslySetInnerHTML={{ __html: todo }} />

			<ReactMarkDown children={contact} /> */}
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
