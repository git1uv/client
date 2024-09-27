import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
	name: 'user',
		initialState: {
			userId: '',
			nickname: '',
			email: '',
			loginType: 'general'
		},
		reducers: {
			setAccount(state, action) {
				const {email, loginType} = action.payload;
				state.email = email;
				state.loginType = loginType;
			},
			setLogin(state, action) {
				const {nickname} = action.payload;
				state.nickname = nickname;
			}
		}
})

export const {setAccount, setLogin} = user.actions;
export default user.reducer;