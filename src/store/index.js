import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const counterReducer = (state = intialState, action) => {
	switch (action.type) {
		case "increment":
			return {
				...state,
				counter: state.counter + 1,
			};

		case "increase":
			return {
				...state,
				counter: state.counter + action.value,
			};

		case "decrement":
			return {
				...state,
				counter: state.counter - 1,
			};

		case "decrease":
			return {
				...state,
				counter: state.counter - action.value,
			};

		case "toggle":
			return {
				...state,
				showCounter: !state.showCounter,
			};

		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;
