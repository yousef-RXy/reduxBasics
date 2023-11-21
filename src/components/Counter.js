import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.Counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	// const decreaseHandler = () => {
	// 	dispatch(counterActions.decrease(5));
	// };

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && (
				<>
					<div className={classes.value}>{counter}</div>
					<div>
						<button onClick={decrementHandler}>Decrement</button>
						{/* <button onClick={decreaseHandler}>Decrement by 5</button> */}
						<button onClick={increaseHandler}>Increment by 5</button>
						<button onClick={incrementHandler}>Increment</button>
					</div>
				</>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
