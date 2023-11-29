import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import classes from "./Auth.module.css";

const Auth = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const login = () => {
		dispatch(authActions.login());
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const fd = new FormData(event.target);
		const data = Object.fromEntries(fd.entries());
		if (
			isNotEmpty(data.email) &&
			isNotEmpty(data.password) &&
			hasMinLength(data.password, 8) &&
			isEmail(data.email)
		) {
			login();
			return;
		}
		console.log("error");
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
						/>
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
