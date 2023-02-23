import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import UserTable from "../Table";

const Main = () => {
	
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	// console.log(users)
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>QuantumIT</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className={styles.user_table}></div>
			{
			<UserTable/>
			}
		
		</div>
	);
};

export default Main;
