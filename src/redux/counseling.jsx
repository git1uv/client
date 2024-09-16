import { createSlice } from "@reduxjs/toolkit";

const counseling = createSlice({
	name: 'counseling',
		initialState: { // 더미데이터
			counselingLogId: '',
			emotion: '',
            date: '',
		},
		reducers: {
			setAnswer(state, action) {
				const {counselingLogId, emotion, date} = action.payload;
				state.counselingLogId = counselingLogId;
				state.emotion = emotion;
				state.date = date;
			},
		}
})

export const {setAnswer} = counseling.actions;
export default counseling.reducer;