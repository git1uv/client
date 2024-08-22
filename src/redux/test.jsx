import { createSlice } from "@reduxjs/toolkit";

const test = createSlice({
	name: 'test',
		initialState: {
			score: 0,
		},
		reducers: {
			setScore(state, action) {
				state.score = action.payload;
			},
            clearScore(state, action) {
                state.score = 0;
            }
		}
})

export const {setScore, clearScore} = test.actions;
export default test.reducer;