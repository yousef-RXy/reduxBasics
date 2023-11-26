import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const intialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	intialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.value;
		},
		decrease(state, action) {
			state.counter = state.counter + action.value;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

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
